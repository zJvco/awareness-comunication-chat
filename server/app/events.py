from .extensions import sio


@sio.on("message")
def message(msg):
    sio.emit("message", msg)