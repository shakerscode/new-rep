import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.environ.get("KEY")

# print(openai.Model.list())

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who was RPI's president in 2020?"},
    ]
)

print(response)