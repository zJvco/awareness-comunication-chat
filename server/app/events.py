from .extensions import sio


@sio.on("message")
def message(msg):
    sio.emit("message", msg)


@sio.on("file-upload")
def file_upload(msg):
    sio.emit("file-upload", msg)