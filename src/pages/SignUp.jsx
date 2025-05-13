import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    emergencyContact: '',
    mentalHealthConditions: '',
    medications: '',
    mood: '',
    mentalHealthGoals: '',
    preferredModeOfSupport: '',
    dataConsent: false,
    privacyConsent: false,
    referralSource: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const validateInputs = () => {
    let validationErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
      isValid = false;
    }

    if (!formData.dob) {
      validationErrors.dob = "Date of Birth is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required.";
      isValid = false;
    }

    if (!formData.mood.trim()) {
      validationErrors.mood = "Please select your current mood.";
      isValid = false;
    }

    if (!formData.mentalHealthGoals.trim()) {
      validationErrors.mentalHealthGoals = "Mental health goals are required.";
      isValid = false;
    }

    if (!formData.dataConsent) {
      validationErrors.dataConsent = "You must consent to data collection.";
      isValid = false;
    }

    if (!formData.privacyConsent) {
      validationErrors.privacyConsent = "You must consent to the privacy policy.";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (!validateInputs()) return;

    localStorage.setItem('userName', formData.fullName);
    toast.success('Sign up successful!');
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        {/* Date of Birth */}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        {/* Current Mood */}
        <select
          name="mood"
          value={formData.mood}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        >
          <option value="">Select your mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Anxious">Anxious</option>
          <option value="Angry">Angry</option>
        </select>
        {errors.mood && <p className="text-red-500 text-sm">{errors.mood}</p>}

        {/* Mental Health Goals */}
        <textarea
          placeholder="What are your mental health goals?"
          name="mentalHealthGoals"
          value={formData.mentalHealthGoals}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        {errors.mentalHealthGoals && <p className="text-red-500 text-sm">{errors.mentalHealthGoals}</p>}

        {/* Privacy Consent */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>I consent to the collection of my data for mental health support.</span>
        </div>
        {errors.dataConsent && <p className="text-red-500 text-sm">{errors.dataConsent}</p>}

        {/* Privacy Policy Consent */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>I consent to the app's privacy policy.</span>
        </div>
        {errors.privacyConsent && <p className="text-red-500 text-sm">{errors.privacyConsent}</p>}

        {/* Sign Up Button */}
        <Button className="w-full bg-comfort-blue" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
