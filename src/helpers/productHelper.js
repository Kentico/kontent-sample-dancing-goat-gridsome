export function getPriceRanges(price) {
  let ranges = []
  if(price <= 50) {
    ranges.push('000-5000')
  }
  if(price>=50 && price <=250) {
    ranges.push('5000-25000')
  }
  if(price>=250 && price <=5000) {
    ranges.push('25000-500000')
  }

  return ranges
}

export function mapProduct (node, filterValues) {
  return {
    path: node.path,
    name: node.productName,
    price: node.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    imageUrl: node.image[0].url,
    productStatus: node.productStatus && node.productStatus.length > 0 ? node.productStatus[0].name : null,
    filterValues
  }
}

export function mapTerm (node) {
  return {
    id: `${node.__typename}__${node.id}`,
    name: node.name,
  }
}