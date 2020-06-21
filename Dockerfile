FROM mcr.microsoft.com/mssql/server:latest
WORKDIR /DoctorFinder
COPY entrypoint.sh database.sh ./
RUN chmod +x ./database.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]