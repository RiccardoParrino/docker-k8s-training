# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3-slim

EXPOSE 8000

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    python3-dev \
    build-essential \
    libuv1-dev \
    && rm -rf /var/lib/apt/lists/*


# Install pip requirements
COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["uvicorn", "main:app"]
