// Email service for sending form submissions
// This uses EmailJS (https://www.emailjs.com/) - a free service for sending emails from client-side JavaScript

interface FormSubmissionData {
  fullName: string;
  phoneNumber: string;
  email: string;
  hospital: string;
  specialization: string;
  experience: string;
  interests: string[];
}

export async function sendFormSubmissionEmail(data: FormSubmissionData): Promise<boolean> {
  try {
    // ============================================================
    // SETUP INSTRUCTIONS FOR EMAILJS:
    // ============================================================
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template with the following variables:
    //    - {{from_name}} - User's full name
    //    - {{from_email}} - User's email
    //    - {{phone_number}} - User's phone number
    //    - {{hospital}} - User's hospital/clinic
    //    - {{specialization}} - User's nursing specialization
    //    - {{experience}} - Years of experience
    //    - {{interests}} - User's interests
    // 4. Get your Public Key from the "Account" tab
    // 5. Get your Service ID and Template ID from the dashboard
    // 6. Replace the values below with your actual IDs
    // ============================================================

    const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY"; // Replace with your public key
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your service ID
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your template ID

    // Prepare the template parameters
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone_number: `+91 ${data.phoneNumber}`,
      hospital: data.hospital || "Not specified",
      specialization: data.specialization,
      experience: data.experience,
      interests: data.interests.join(", "),
      to_email: "support@nuon.app", // Your receiving email address - CHANGE THIS
    };

    // Import EmailJS dynamically
    const emailjs = await import("@emailjs/browser");

    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Send the email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    
    // Fallback: Log to console for development
    console.log("Form Submission Data (would be sent via email):", data);
    
    // In production, you might want to store this in a database or send to a backend API
    // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(data) });
    
    return false;
  }
}

// Alternative method: Send to your own backend API
export async function sendToBackendAPI(data: FormSubmissionData): Promise<boolean> {
  try {
    // ============================================================
    // BACKEND API SETUP:
    // ============================================================
    // If you prefer to use your own backend API instead of EmailJS:
    // 1. Create a backend endpoint (e.g., /api/waitlist)
    // 2. Replace the URL below with your actual API endpoint
    // 3. Configure your backend to send emails or store in database
    // ============================================================

    const response = await fetch("https://your-backend-api.com/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return true;
  } catch (error) {
    console.error("Failed to send to backend:", error);
    return false;
  }
}
