# AJAX-CRUD-ASPNETMVC

Has AJAX, JQUERY, Bootstrap, CRUD, Stored Procedures, Validation

![image](https://user-images.githubusercontent.com/68544411/109966192-eb9d8700-7d2a-11eb-8ddf-3f49c8fca6e0.png)




CREATE PROCEDURE sp_DeleteEmployee
	@id int
AS
BEGIN
	SET NOCOUNT ON;

	Delete from [dbo].[Employee]
	where EmployeeID = @id
END
GO



CREATE PROCEDURE [dbo].[sp_UpdateEmployee]
	@empID int,
	@empName varchar(50),
	@empMName varchar(50),
	@empLName varchar(50),
	@dateHired datetime
AS
BEGIN
	
	SET NOCOUNT ON;
	
	Update [dbo].[Employee]
	set EmpName = @empName, EmpMidName = @empMName, EmpLastName = @empLName, DateHired = @dateHired
	where EmployeeID = @empID
END

CREATE PROCEDURE [dbo].[sp_AddEmployee]
	-- Add the parameters for the stored procedure here
	@empName varchar(50),
	@empMName varchar(50),
	@empLName varchar(50),
	@dateHired datetime
AS
BEGIN
	SET NOCOUNT ON;

	Insert into  [dbo].[Employee]
	values (@empName,@empMName,@empLName,@dateHired, GETDATE())
END



