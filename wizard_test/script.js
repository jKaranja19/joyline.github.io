let businessData = {};

// Fetch data from mock API
function fetchData() {
    // Mock API response
    const mockApiResponse = {
        businessName: "Example Business",
        businessType: "Retail"
    };
    return Promise.resolve(mockApiResponse);
}

// Display fetched data in Step 1
function displayData() {
    document.getElementById("business-name").innerText = businessData.businessName;
    document.getElementById("business-type").innerText = businessData.businessType;
}

// Move to Step 2
function nextStep() {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
}

// Verify and edit data in Step 2
function verifyAndEdit() {
    const newBusinessName = document.getElementById("new-business-name").value.trim();
    const newBusinessType = document.getElementById("new-business-type").value.trim();

    // Update business data if new values are provided
    if (newBusinessName !== "") {
        businessData.businessName = newBusinessName;
    }
    if (newBusinessType !== "") {
        businessData.businessType = newBusinessType;
    }

    // Display updated data
    displayData();

    // Move to next step
    nextStep();
}

// Initialize wizard
function initializeWizard() {
    fetchData()
        .then(data => {
            businessData = data;
            displayData();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Initialize wizard when the page loads
window.onload = initializeWizard;
