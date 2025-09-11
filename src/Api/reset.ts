export default async function reset(email : string, pass : string) {
    const res = await fetch(
        'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email":email,
                "newPassword": pass
            }),
        }
    );

    const data = await res.json();
    console.log(data);

    return data;
}