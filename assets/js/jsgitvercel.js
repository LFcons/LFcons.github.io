document.addEventListener("DOMContentLoaded",function(){const form=document.getElementById("formulaireContactes");const messageContent=document.getElementById("message-content");const recipientPublicKey= `
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGUUkywBEACpnwGOaD00lhHoguy7/NmfmgZl3LMmctrA1niitOBCW4zdJloG
kzmKQp+QrI5sQcbNFQrbDwdiBX8InLSkbjLXJ8ADxgznS4/L4wY4XRunNIE1b3ag
uKzxjt2SEoUO4jy/hZq2lCx/8rielOq1qSMLQn2cDxUZANatN12PEWPqfhF7/lHG
30uYe9L4wjSUWyu8d71fUFpLtRyIZYbYCqO4gp2P30pLALPqfEoSXsQwKCYI5fAa
oVyR2MxX8TQWXNVxqmB9YLAWiCGHj3WWYJ08nch6LzFehL+OPwJg6tHAHucLFnoO
RF1sD7oyMkQJMQuMSH1oE55vJFJto5CZyHy8+S6rZp59/9a54bQjvOpDuV2H4qkV
gSQqhhWpS94PWUepzW0eqEmmEcUKJOMYDrFQZGG0OucKQNjZgFo+vkdIPXS7ZSQJ
TUOaZw6UaY/X34bGG9NoKYfj2Mfv2rqMX+ZJLcw6c4Q+b2iF577TJqPQfTCzNbn3
YhYtufAQ+F8JFqtfbv3NQrEgwcYjrP1yHqpCNU7lIOVc9dNzE4dk1w5wmoA35FKH
056+Onmn4b84lwXr1xWWhYToDqbqqTZpptZOFkWxzXoFRPjKGFWcuAtegWf3sLiE
bmuCZKoWCqzZNoRCnMBGxUslL6knlfJtUd1F6xVBPnEm+e6hy32KnGSVdwARAQAB
tCRMRi1jb25zIDxsdXRoZXJtZXNza2luZzk1QGdtYWlsLmNvbT6JAk4EEwEKADgW
IQQLh85QzFZ8F8RMy8SlkJywMskRhQUCZRSTLAIbAwULCQgHAgYVCgkICwIEFgID
AQIeAQIXgAAKCRClkJywMskRhcfVEACCw+vMx+G1Tei5zLKZVQuonACIkiAMrLGv
SVedoqhtZaLXNEWh7z2e+0OmSPWCs+rZiaR7JGPbcfVpv/y9bG4+bn50e0rtJKd+
qGk/i/6SumCXsnU8qKHRyoRD9Ze5a4+BTADeDygC+zM4/IrBDw6jy7ycgWbsTV7I
/fhqsYbigewn9UqLn1YzKIYyo4lcaIgHQU0S0MFRk4In8FQAqSAV7GjmtsN/AK5T
3YyDLCNgV7jpMIIoD00TOrANmRJPVAiUtBWh3F/2zGPFEL3nHgrf9EWFyFL0mOYE
rTGizOx2xrYoDam+F6UgO60o6EPPunkNFkexvABo6E3J4LvjEb+WWkusdIhTP9O9
Y0u3G4A2csNJYuf6/ITPQRF3MNiBdgZbKU27lh4F6E43a1U5ABYFXTpeKuewKRfL
atiljPUkOgoZUXIQafWp6DrIqaKnVZBuEwLDblfM5IinN0G7QHUjQRA7beYG1vCf
HWs18kygJOEj5pMjtOPBr/hV505KXc0fYzRJrjtjZJ5UpNV5SGRlkGK2/24a4P9l
T8PeZPCu7gZolFu0KB+9Bg1DRH9DY09BhNs3dlitLiCvVucrZDwmu0KHJVrhvIxv
Izkpy0GOJCyZRBDr7Xb0s2ujCe6IEU3q9Xov3ldRsMuLxxXKyl40Xp6pAG+alnhJ
tCo7xgYcJbkCDQRlFJMsARAArUy9pVXRWH78GuYoNfGri88IxWD7EvzVNgBfcgiH
6M8EeLgULgjoco1b3ECplpQOcvh5ENfDucOePgHwQfZVrLLQU1LnCaYzPi1jCCOd
OHk8DYcp1BGKXAkSu/Q+BnLnh+miwGe3G2/QwnHEYtw5YMXCisLqAJbA2ctNXU5q
0sgHBM4b6z5fEBrE5oOlCmCtn/gw0crhwAc80kcegCQE8ivHj/blWTT/NgR/glO0
Ajkxa3zUJ2Ij4EkTqJEcQOEI0tCA7PoxBVI5pkYPu96uCLEXOReYdAg32lmWvf2o
Zd1OPMIcpzqPFgGdr7nfEsXHS1ensmLVik62ei1hkNfUW+EpGMeCz75tP4vdwJYL
4k5VF4MeARN4vd7XDTsBRqlhDqgrEmphYHyAxUsTHsm+tXDmoITl7792RCAm6+TJ
D3trhRhSZyf0Dk0TnkJ7eyG1ZfLHhgZS6xfx1pZrKLy5jNWes8gUXaQLKpq6o0x8
6nKuPi+HhJD0gbimF3UdqCe45ikqsv6ur1ApuBFiyzBoQ/KCb8OBB3OrVE0iIAEK
vzfQSMNPlHvbmaOpW2JX8A6Nrp3iMlC3WgNglrS37/4lLjfqF633kPkxK1b4dHiR
Hbo+v2kDpknUgaFv7ka5zFANDbPR1nO2ur4UuWwcQejiRi9v24tcTc7wO8sgvMPH
1EcAEQEAAYkCNgQYAQoAIBYhBAuHzlDMVnwXxEzLxKWQnLAyyRGFBQJlFJMsAhsM
AAoJEKWQnLAyyRGFerkP/A5fcdICv86iILFX+eAQ1XCygBTh7P+9wZoCDBP5daPI
bKLJAetETXIQStwtMdTtHh7HiBl9HNthuzec+9cYiDlvS7rDp66H3X11f1rfQ1vs
9qwTv9Q3GGfaQGMhz/pzrEernyPeR62kiuxk+PE21qlLQLwG5lfTanz8/awjEjoB
TeZ02QYmgC8IMP4BjEpj8BhuV2N9ocC1E29N3qps2SiLtEYnkDaKkvSmEitKMYNn
/Lrziv45yq/ExcyPtWMy4c9x+LAwOofE5QUeoWpbRGChMcKbn7qkwJF/zecywWNP
TwiOKaAUqlKNW30MMLbQ5kXWTQlrw4tsqboLLn3ftRTIinNQUnvG/z/jjEEbThoi
RMZA8T2lHYO6JzUww+7JGMMWCLxYJKjwuzD+6spz0bgviWXVBoyYSC0x5qi4Avmg
F069HnFM8MTAJIk7OsGFRIY4nGAKDHvWCxAV6e994sTHeZGZ3A2EZZ0XGXNDPWbx
lHsdxwfb3vFgDRfDG94tmTZ5odp6swhoK5i+T8Qc6ygOvz5EFhxp+KIdETAsgBFw
p9z1LNYSS8QisN3h0wKGpuw6xH9P9EhNB5ek3bQUkQrzjK6QQqSZHhel/YGjz16p
94Wk569PSjFC/bLQoEqDHhOC68F9htU8IWPvX/R4TIw57mrTID5ip7ADYvhhvhDX
=6lb5
-----END PGP PUBLIC KEY BLOCK-----
`;const secretLienduRepo="https://verification-requette-lf-consulting.vercel.app/api/mainFunction";const method_requette='POST';const content_type='application/json';const headers_requette={'Accept':'',"Content-Type":content_type};form.addEventListener('submit',async function(event){event.preventDefault();const publicKey=await openpgp.readKey({armoredKey:recipientPublicKey});const name=sanitizeInput(form.querySelector('#name').value);const encryptionMessage=await openpgp.encrypt({message:await openpgp.createMessage({text:sanitizeInput(form.querySelector('#message').value)}),encryptionKeys:publicKey});const encryptionEmail=await openpgp.encrypt({message:await openpgp.createMessage({text:sanitizeInput(form.querySelector('#email').value)}),encryptionKeys:publicKey});const requestBody={name:name,email:encryptionEmail,message:encryptionMessage};const data={event_type:'submit_form',client_payload:requestBody};await fetch(secretLienduRepo,{method:method_requette,headers:headers_requette,body:JSON.stringify(data)}).then(response=>{if(response.status===200||response.status===204){alert('Mail envoyé avec succès!');}else{alert("Une erreur est survenue lors de l'envoi du mail.Veuillez réessayer plus tard.");}}).catch(error=>{alert("Une erreur est survenue. Le mail n'a pas été envoyé.");});});});

