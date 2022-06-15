import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { TokenTypes } from '../constants/enums';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useDecodedToken from './useDecodedToken';

export default function useChat(companionId: number) {

    // состояние для идентификатора комнаты
    const [roomId, setRoomId] = useState(null);
    // получаем пользователя из storage
    const user = useAppSelector(state => state.user.data)
    // получаем сообщения из storage
    const messages = useAppSelector(state => state.chat.messages)
    // иммутабельное состояние для сокета
    const { current: socket } = useRef(
        io('http://192.168.0.51:3001/', {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                // roomId: user.roomId,
                userName: user.fullName
            }
        })
    )

    const dispatch = useAppDispatch()
    console.log('render')
    const token = useDecodedToken(TokenTypes.accessToken)
    const currentUserId = token.sub

    // регистрируем обработчики
    useEffect(() => {

        // подключаемся к комнате
        socket.emit('joinRoom', { companionId, currentUserId })

        // запрашиваем сообщения из БД
        socket.on('messages', (messages) => {
            dispatch({ type: 'SET_MESSAGES', payload: messages })
        })

        // получаем идентификатор комнаты
        socket.on('roomId', (roomId) => {
            setRoomId(roomId)
        })

        // обрабатываем получение обновленного списка сообщений
        socket.on('newMessages', (newMessages) => {
            dispatch({ type: 'SET_MESSAGES', payload: newMessages })
        })

    }, [])

    // метод для отправки сообщения
    const sendMessage = (message) => {
        socket.emit('addMessage', { message, roomId, currentUserId })
    }

    // метод для удаления сообщения
    const removeMessage = (message) => {
        socket.emit('removeMessage', message)
    }

    // метод отсоединения от комнаты
    const leaveRoom = () => {
        socket.emit('leaveRoom')
    }

    return { roomId, sendMessage, removeMessage, messages, leaveRoom }
}