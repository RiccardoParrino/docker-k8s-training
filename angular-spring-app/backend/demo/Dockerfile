FROM maven:3.9.6-eclipse-temurin-17
WORKDIR /usr/src/app
COPY . .
RUN mvn clean install
WORKDIR /usr/src/app/target
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "Demo.jar"]