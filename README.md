# Face-Detection-Api
    Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    If that isn't working, then that means you will have to wait until their servers are back up. Another solution
    is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
    so you would change from:
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    to:
    .predict('c0c0ac362b03416da06ab3fa36fb58e3', req.body.input)