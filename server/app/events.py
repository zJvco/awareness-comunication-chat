from .extensions import sio


@sio.on("test")
def message(msg):
    print(msg)
    sio.emit("test", msg)