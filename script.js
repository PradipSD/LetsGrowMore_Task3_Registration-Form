
// LetsGrowMore
//    Task3
//     By 
// Pradip Dound

function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const imageInput = document.getElementById("image");
  
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.value);
  
    const skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    const skillsValues = Array.from(skillsCheckboxes).map(checkbox => checkbox.value);
  
    const formData = {
      name,
      email,
      website,
      gender: genderValues,
      skills: skillsValues
    };
  
    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        formData.image = event.target.result;
        displayFormData(formData);
      };
  
      reader.readAsDataURL(imageFile);
    } else {
      displayFormData(formData);
    }
  }
  
  function displayFormData(formData) {
    const output = document.getElementById("output");
    output.innerHTML = `
      <h2>Registration Details:</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Website:</strong> ${formData.website}</p>
      ${formData.image ? `<img src="${formData.image}" alt="Uploaded Image" class="selected-image">` : ''}
      <p><strong>Gender:</strong> ${formData.gender.join(", ")}</p>
      <p><strong>Skills:</strong> ${formData.skills.join(", ")}</p>
    `;
  }
  
