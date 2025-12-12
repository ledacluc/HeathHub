// // Show address field only when service = home or lab_test
// document.querySelectorAll('input[name="service_type"]').forEach(radio => {
//     radio.addEventListener("change", () => {
//         let type = document.querySelector('input[name="service_type"]:checked').value;

//         if (type === "home" || type === "lab_test") {
//             document.getElementById("addressBox").style.display = "block";
//         } else {
//             document.getElementById("addressBox").style.display = "none";
//         }
//     });
// });