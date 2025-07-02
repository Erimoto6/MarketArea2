
  const profileTrigger = document.getElementById('profileTrigger');
  const sidebar = document.getElementById('profileSidebar');
 
  // Terms modal logic 
  document.getElementById('terms-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('terms-modal').style.display = 'flex';
  });
  document.getElementById('footer-terms-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('terms-modal').style.display = 'flex';
  });
  document.getElementById('close-terms-modal').addEventListener('click', function() {
    document.getElementById('terms-modal').style.display = 'none';
  });
  document.getElementById('terms-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });

  profileTrigger.addEventListener('click', (e) => {
    e.preventDefault(); // prevent anchor from navigating
    sidebar.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    const wrapper = document.querySelector('.profile-sidebar-wrapper');
    if (!wrapper.contains(e.target)) {
      sidebar.classList.remove('show');
    }
  });

  document.getElementById('logout-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Stop the default navigation

    if (confirm("Are you sure you want to log out?")) {
      // Proceed to logout if confirmed
      window.location.href = this.href;
    }
  });

  const steps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.blotter-step');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const submitBtn = document.querySelector('.submit-btn');

  let currentStep = 0;

  function updateFormSteps() {
    steps.forEach((step, index) => {
      step.style.display = index === currentStep ? 'block' : 'none';
    });

    progressSteps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });

    prevBtn.disabled = currentStep === 0;
    nextBtn.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = currentStep === steps.length - 1 ? 'inline-block' : 'none';
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateFormSteps();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
    }
  }

  // Run on page load
  updateFormSteps();
