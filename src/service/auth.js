async function login(email){
            const res = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            let data = await res.json();
            return {ok : res.ok, data};
}   

export { login };