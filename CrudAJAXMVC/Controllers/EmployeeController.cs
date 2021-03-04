using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CrudAJAXMVC.Models;


namespace CrudAJAXMVC.Controllers
{
    public class EmployeeController : Controller
    {
        private CrudDBEntities _db = new CrudDBEntities();

        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetEmployeeList()
        {
            return Json(new { data = _db.Employees.ToList()}, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddEmployee(EmployeeViewModel empList)
        {
            _db.Database.ExecuteSqlCommand("EXEC sp_AddEmployee {0},{1},{2},{3}", empList.EmpName, empList.EmpMidName, empList.EmpLastName, empList.DateHired);
            return Json(empList);
        }

        [HttpGet]
        public ActionResult GetEmployeeIDDetail(int id)
        {
            return Json(new { data = _db.Employees.Where(x => x.EmployeeID == id).ToList() }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult UpdateEmployeeIDDetail(EmployeeViewModel empList)
        {
            _db.Database.ExecuteSqlCommand("EXEC sp_UpdateEmployee {0},{1},{2},{3},{4}", empList.EmployeeID, empList.EmpName, empList.EmpMidName, empList.EmpLastName, empList.DateHired);
            return Json(empList);
        }

        [HttpPost]
        public ActionResult DeleteEmployeeData(int id)
        {
            var data = _db.Database.ExecuteSqlCommand("EXEC sp_DeleteEmployee {0}", id );
            return Json(data);
        }
    }
}   