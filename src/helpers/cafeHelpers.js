export function mapCafe (cafe) {
  const countryWithState = cafe.country + (cafe.state ? `, ${cafe.state}` : '')
  const location = `${cafe.city}, ${countryWithState}`
  return {
    name: cafe.name,
    photo: cafe.photo[0] ? cafe.photo[0].url : null,
    street: cafe.street,
    city: cafe.city,
    zipCode: cafe.zipCode,
    country: cafe.country,
    state: cafe.state,
    phone: cafe.phone,
    dataAddress: `${cafe.city}, ${cafe.street}`,
    countryWithState,
    location,
    email: cafe.email
  }
}