
document.addEventListener('DOMContentLoaded', function() {
   
    alert('Bienvenue sur notre site web!');
});

const productPrice = 100;

        function calculateTotal() {
            const quantity = document.getElementById("quantite").value;
            const total = quantity * productPrice;
            document.getElementById("total").textContent = total;
        }

       
        function validateOrder() {
            
            const telephone = document.getElementById("telephone").value;
            const phonePattern = /^\d{10}$/;
            if (!phonePattern.test(telephone)) {
                alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
                return false;
            }

           
            const codePostal = document.getElementById("codePostal").value;
            if (!/^\d+$/.test(codePostal)) {
                alert("Le code postal doit contenir uniquement des chiffres.");
                return false; 
            }

            
            const message = document.getElementById("message");
            message.style.display = "block"; 
            return false; 
        }

        
        calculateTotal();
