async function sendApplication() {
    const url = "https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net";
    const payload = { email: "ToriCareer@outlook.com" };

    const headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

sendApplication();