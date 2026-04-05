import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-md">
        
        <h1 className="text-2xl font-bold mb-4 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

          <p>
            Welcome! By accessing or using our platform, you agree to comply with
            and be bound by the following terms and conditions.
          </p>

          <h2 className="font-semibold text-lg">1. User Responsibilities</h2>
          <p>
            You agree to provide accurate information and not use the platform
            for any unlawful or harmful activities.
          </p>

          <h2 className="font-semibold text-lg">2. Account Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </p>

          <h2 className="font-semibold text-lg">3. Privacy Policy</h2>
          <p>
            Your data will be handled securely and in accordance with our
            privacy policy.
          </p>

          <h2 className="font-semibold text-lg">4. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate any of these terms.
          </p>

          <h2 className="font-semibold text-lg">5. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use means you
            accept the updated terms.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accept & Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default Terms;