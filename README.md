# DKM Engine

A modern 2D game engine built with TypeScript, Rust, Pixi.js & Tauri, designed to provide a robust foundation for creating 2D games with a focus on performance, flexibility, and ease of use.

## Features

- **Scene Management**: Efficient scene handling with smooth transitions
- **Entity Component System**: Flexible and performant game object architecture
- **Input System**: Comprehensive input handling for keyboard, mouse, and touch
- **Resource Management**: Efficient asset loading and management
- **Physics System**: Built-in physics capabilities for 2D games
- **Audio System**: Advanced audio management with support for multiple formats
- **UI System**: Modern UI framework with responsive design
- **Animation System**: Powerful animation capabilities
- **Particle System**: Dynamic particle effects
- **Debug Tools**: Built-in debugging and development tools

## Prerequisites

- Node.js (v16 or higher)
- npm
- TypeScript
- Rust

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dkm-engine.git
cd dkm-engine
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run tauri dev
```

## Project Structure

```
src/
├── engine/         # Core engine components
├── components/     # Reusable game components
├── game/          # Game-specific code
└── assets/        # Game assets (images, audio, etc.)
```

## Core Systems (\* Currently in development)

### Scene Management

The engine provides a robust scene management system that handles:

- Scene transitions
- Resource loading/unloading
- Scene lifecycle management

### Entity Component System

A flexible [ECS](https://en.wikipedia.org/wiki/Entity_component_system) architecture that allows for:

- Dynamic game object creation
- Component-based behavior
- Efficient updates and rendering

### Input System

Comprehensive input handling for:

- Keyboard events
- Mouse interactions
- Touch controls
- Gamepad support

### Resource Management

Efficient asset management with:

- Automatic resource loading
- Memory management
- Asset caching

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Pixi.js](https://pixijs.com/)
- Powered by [TypeScript](https://www.typescriptlang.org/) & [Rust](https://www.rust-lang.org/)
- Developed with [Tauri](https://v2.tauri.app/)
