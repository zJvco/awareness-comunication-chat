import threading
import socket


class Client:
    def __init__(self, socket):
        self.client = socket

        try:
            self.client.connect(('127.0.0.1', 7777))
    def __init__(self):
        client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        try:
            client.connect(('localhost', 7777))
        except:
            print('\nNão foi possívvel se conectar ao servidor!\n')

        username = input('Usuário> ')
        print('\nConectado')

        thread1 = threading.Thread(target=self.receiveMessages, args=[self.client])
        thread2 = threading.Thread(target=self.sendMessages, args=[self.client, username])
        thread1 = threading.Thread(target=self.receiveMessages, args=[client])
        thread2 = threading.Thread(target=self.sendMessages, args=[client, username])

        thread1.start()
        thread2.start()

    def receiveMessages(self, client):
    def receiveMessages(client):
        while True:
            try:
                msg = client.recv(2048).decode('utf-8')
                print(msg + '\n')
            except:
                print('\nNão foi possível permanecer conectado no servidor!\n')
                print('Pressione <Enter> Para continuar...')
                client.close()
                break

    def sendMessages(self, client, username):
    def sendMessages(client, username):
        while True:
            try:
                msg = input('\n')
                client.send(f'<{username}> {msg}'.encode('utf-8'))
            except:
                return

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client = Client(socket)

#cd PycharmProjects\APS_Chat\MultiConect
client = Client()
