from fastapi import FastAPI

app = FastAPI()

@app.get("/api/welcome")
def read_root():
    return {"msg":"Hello from FastAPI!"}