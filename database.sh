#!bin/bash
sleep 20s

/opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U SA -P Pass@Word1 -Q "CREATE DATABASE DoctorFinder"
