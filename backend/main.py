from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model.interface import Interface


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add OPTIONS method
    allow_headers=["*"],
)

interface = Interface()

class PostData(BaseModel):
    text: str

def analyze_text(text: str) -> float:
    # text analysis logic here
    result = interface.check_message(text)
    not_scam = result[0]
    scam = result[1]
    if scam > not_scam:
        return scam
    else:
        return 1 - not_scam

@app.post("/analyze")
def analyze_post_data(post_data: PostData):
    text = post_data.text
    rating = analyze_text(text)
    return {"rating": rating}
