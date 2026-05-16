# EcoCharge

Powering the Smart City with Every Step through advanced piezoelectric energy harvesting.

EcoCharge is an innovative hardware-software solution designed to capture kinetic energy from foot traffic and convert it into usable clean electricity. By integrating high-performance piezoelectric sensors with a robust IoT control system, we aim to build decentralized, Net-Zero energy grids for modern urban environments.

## Quick Start

Follow these steps to get the landing page running locally:

```bash
# Clone the repository
git clone https://github.com/Logm12/ecocharge.git

# Navigate to the project directory
cd ecocharge

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

- **Kinetic Energy Harvesting**: Utilizes high-tensile piezoelectric discs to convert vibrational compression from footsteps into electrical potential.
- **Layered Technology**:
  - **Rugged Surface**: Polycarbonate cover with integrated OLED status displays and USB charging ports.
  - **Piezoelectric Matrix**: A durable grid of sensors optimized for maximum energy capture.
  - **ESP32 Core Control**: Advanced IoT node housing capacitors and boost converters for stable energy delivery.
- **Net-Zero Goal**: Designed for integration into Smart City infrastructure to support local renewable energy targets.
- **Interactive Visualization**: High-fidelity landing page built with Next.js and Framer Motion to showcase the product's internal architecture.

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port for local development | 3000 |

## Documentation

- [System Architecture](https://github.com/Logm12/ecocharge/blob/main/EcoCharge%20-%20English%20verse.pptx): Detailed technical deck and project overview.
- [Technology Deep Dive](src/components/sections/TechSection.tsx): Implementation details of the 3D deconstructed visual.

## License

MIT
