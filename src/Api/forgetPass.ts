export default async function forgetPass(email : string) {
    const res = await fetch(
        'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email":email
            }),
        }
    );

    const data = await res.json();
    console.log(data);

    return data;
}