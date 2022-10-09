//display iframe in jsx
const SignIn = () => {
    return (
        <div>
        <iframe
            src="http://localhost:3000/auth/google"
            width="100%"
            height="100%"
            style={{ border: "none" }}
        />
        </div>
    );
    }

// Language: typescript
// Path: front-end/src/auth/SignIn.tsx
// Compare this snippet from front-end/src/auth/SignUp.tsx:
// };
//
