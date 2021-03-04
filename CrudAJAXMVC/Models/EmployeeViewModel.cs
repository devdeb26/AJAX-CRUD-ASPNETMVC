using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CrudAJAXMVC.Models
{
    public class EmployeeViewModel
    {
        [Key]
        public int EmployeeID { get; set; }

        [Required]
        [Display(Name = "Employee Name")]
        public string EmpName { get; set; }

        [Required]
        [Display(Name = "Employee Middle Name")]
        public string EmpMidName { get; set; }

        [Required]
        [Display(Name = "Employee Last Name")]
        public string EmpLastName { get; set; }

        [Required]
        [Display(Name = "Date Hired")]
        public DateTime DateHired { get; set; }

        [Required]
        [Display(Name = "Date Created")]
        public DateTime? DateCreated { get; set; }
    }
}