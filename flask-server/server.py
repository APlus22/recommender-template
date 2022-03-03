from flask import Flask
from flask_restful import Api, Resource
# import torch


app = Flask(__name__)
api = Api(app)

class Helloworld(Resource):
    def get(self, name, age):
        #과정
        # model = torch.load(PATH + 'model.pt')
        print("gg")
        return {"name":name, "age": age} #결과

    def post(self):
        return {"data": "post"}

api.add_resource(Helloworld, "/helloworld/<string:name>/<int:age>")

if __name__ == "__main__":
    app.run(debug=True)

# @app.route("/members")
# def members():
#     return {"members": ["member1", "Member2", "Member3"]}

# if __name__ == "__main__":
#     app.run(host = "127.0.0.1",port=5000 ,debug=True)