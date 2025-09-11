export default async function verifyCode(code : string) {
    const res = await fetch(
        'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "resetCode":code
            }),
        }
    );

    const data = await res.json();
    console.log(data);

    return data;
}