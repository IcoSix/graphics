# IcoSix API

![IcoSix API Logo](assets/images/icosix-logo.png)

## Overview

IcoSix API is a comprehensive RESTful API for accessing thousands of professionally designed icons, SVG vectors, and animated GIFs. The API provides easy integration into websites, applications, and design tools, allowing developers to incorporate high-quality graphics with minimal effort.

## 🔗 Official Resources

* [**IcoSix Official Website**](https://www.icosix.com/) - Browse thousands of free icons & graphics
* [**SVG Vector Library**](https://www.icosix.com/svg-vector-library) - High-quality SVG vector graphics
* [**Icons Library**](https://www.icosix.com/icon-library) - Free icon collection for all projects
* [**Animated Icons - GIF Library**](https://www.icosix.com/gif-library) - Explore thousands of animated GIFs and motion icons

## Features

- **Extensive Collection**: Access to 39,000+ graphics including icons, SVG vectors, and animated GIFs
- **Multiple Formats**: Support for PNG, SVG, ICO, and GIF formats
- **Customization**: Control size, color, and other properties through API parameters
- **Fast Delivery**: Global CDN ensures rapid content delivery
- **Comprehensive Documentation**: Detailed guides and examples for easy implementation
- **Flexible Plans**: Free tier and premium options to suit various needs

## Documentation

The IcoSix API documentation includes:

- Authentication methods
- Available endpoints
- Request/response formats
- Rate limiting information
- Code examples in multiple languages

## Getting Started

### 1. Register for an API Key

```javascript
// Example: Generate API Key
const response = await fetch('https://api.icosix.com/v1/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Your Name',
    email: 'your@email.com'
  })
});

const data = await response.json();
console.log('Your API Key:', data.api_key);
```

### 2. Make API Requests

```javascript
// Example: Fetch Graphics
const apiKey = 'YOUR_API_KEY';
const response = await fetch('https://api.icosix.com/v1/graphics?type=svg', {
  headers: {
    'X-API-Key': apiKey
  }
});

const data = await response.json();
console.log('Graphics:', data.graphics);
```

## Pricing Plans

- **Free**: Access to public graphics, standard resolution, 500 requests per day
- **Basic**: Access to all graphics, high resolution, 5,000 requests per day, $19/month
- **Premium**: Access to all graphics, 4K resolution, all formats, 25,000 requests per day, $49/month
- **Enterprise**: Custom solution tailored to specific requirements

## Support

For support inquiries, please contact:
- Email: support@icosix.com
- Support Center: [https://api.icosix.com/support-center.php](https://api.icosix.com/support-center.php)

## License

The IcoSix API is licensed under the [IcoSix API License Agreement](https://api.icosix.com/license.html).

© 2025 IcoSix. All Rights Reserved. 