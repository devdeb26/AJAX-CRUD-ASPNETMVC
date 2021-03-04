

$(document).ready(function () {
    $("#EmployeeListDT").DataTable({
        "ajax": {
            "url": "/Employee/GetEmployeeList",
            "type": "GET",
            "dataType": "json",
        },
        "columns": [
            {
                "data": "EmpName"
            },
            {
                "data": "EmpMidName"
            },
            {
                "data": "EmpLastName"
            },
            {
                "data": "DateHired",
                "render": function (data) {
                    return (
                        dateFormat(new Date(parseInt((data).match(/\d+/)[0])))
                    );
                }
            },
            {
                "data": "EmployeeID",
                "render": function (data) {
                    return "<a class='btn btnEdit' onClick='pullEmployeeData(" + data + ")'><i style='font-size:24px' class='fa'>&#xf044;</i></a> <a class='btn btnDelete'  onClick='deleteEmployeeData(" + data + ")'><i style='font-size:24px' class='fa'>&#xf014;</i></a>"

                }
            }
        ],
        "dom": "lrtip",
        "bPaginate": false,
        "bLengthChange": false,
        "bInfo": false



    });


    $(".datepicker").datepicker({
        dateFormat: "mm-dd-yy",
        changemonth: true,
        changeyear: true
    });

    $('.btnAdd').on("click", function () {

        $('.btnAddEmployee').removeAttr('hidden');
        $('.btnEditEmployee').attr('hidden', '');

    });

    $(".btnAddEmployee").on("click", function () {
        var date = dateFormat(new Date(parseInt(($(".datepicker").val()).match(/\d+/)[0])))
        $.ajax({
            type: "POST",
            url: "/Employee/AddEmployee",
            dataType:"json",
            data: {
                empName: $(".txtEmpName").val(),
                empMidName: $(".txtEmpMidName").val(),
                empLastName: $(".txtEmpLastName").val(),
                dateHired: $(".datepicker").val()
            },
            success: function () {
                $("#addModal").modal("hide");
                alert("Added Successfully!");
                $('#EmployeeListDT').DataTable().ajax.reload();
            }
        })
    });

    $(".btnEditEmployee").on("click", function () {
        $.ajax({
            type: "POST",
            url: "/Employee/UpdateEmployeeIDDetail",
            dataType: "json",
            data: {
                employeeID: $("#EmployeeID").val(),
                empName: $(".txtEmpName").val(),
                empMidName: $(".txtEmpMidName").val(),
                empLastName: $(".txtEmpLastName").val(),
                dateHired: $(".datepicker").val()
            },
            success: function () {
                $("#formModal").modal("hide");
                alert("Updated Successfully!");
                $('#EmployeeListDT').DataTable().ajax.reload();
            }
        })
    });
    
});

function dateFormat(d) {
    return ((d.getMonth() + 1) + "").padStart(2, "0")
        + "/" + (d.getDate() + "").padStart(2, "0")
        + "/" + d.getFullYear();
}

function pullEmployeeData(id) {
    $("#formModal").modal("show");
    $.ajax({
        url: "/Employee/GetEmployeeIDDetail",
        dataType: "json",
        type: "GET",
        data: { id },
        success: function (data) {
            $.each(data, function (value, key) {
                $.each(key, function (value, i) {
                    var date = dateFormat(new Date(parseInt((i.DateHired).match(/\d+/)[0])))
                    $("#EmployeeID").val(i.EmployeeID);
                    $("#EmpName").val(i.EmpName);
                    $("#EmpMidName").val(i.EmpMidName);
                    $("#EmpLastName").val(i.EmpLastName);
                    $("#DateHired").val(date);
                });
            });
        }
    })

    $('.btnEditEmployee').removeAttr('hidden');
    $('.btnAddEmployee').attr('hidden','');
}

function deleteEmployeeData(id) {
    $.ajax({
        url: "/Employee/DeleteEmployeeData",
        dataType: "json",
        type: "POST",
        data: { id },
        success: function () {
            alert("Deleted Successfully!");
            $('#EmployeeListDT').DataTable().ajax.reload();
        }
    })
}