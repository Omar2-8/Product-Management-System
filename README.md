Product-Management-System


Prerequisites

.NET Core SDK
Docker
SQL Server
Node.js (v14 or higher)
Angular CLI (npm install -g @angular/cli)

1. Database Setup

Start SQL Server container:
docker pull mcr.microsoft.com/mssql/server

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=PMS@123" -p 1433:1433 -d mcr.microsoft.com/mssql/server


2. Run SQL script:
 
Connect to: localhost,1433

Execute the attached SQL script file


API Setup

Restore and run the .NET Core API:

dotnet restore

Change the Port to IIS[optional]

dotnet run


Frontend Setup (Angular)

cd FrontEnd/product-management-ui

npm install

ng serve
