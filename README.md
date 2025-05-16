# Pirate King - React Native

A React Native card game with trick-taking mechanics similar to "Skull King" for iOS and Android. This game features both local pass-and-play multiplayer and online multiplayer options.

## Overview

Pirate King is a strategic card game where players bid on how many tricks they'll win in each round and then try to meet their bid exactly. It includes special cards like pirates, mermaids, and the powerful Skull King that add depth to the gameplay.

## Features

- **Core Game Engine**: Sophisticated engine handling bidding, trick resolution, and scoring
- **Multiplayer Options**:
  - Local Pass & Play for in-person gameplay
  - Online Multiplayer with real-time WebSocket communication
- **Interactive Tutorial**: Learn the game mechanics through a guided tutorial
- **Customization**: Personalize your gameplay experience with:
  - Card back designs
  - Table skins
  - Player avatars
- **Leaderboards & Achievements**: Track your progress and compete with friends

## Project Structure

The project is divided into two main components:

### Client (React Native)

Located in `core-game/SkullKingClient/`

- **Main Screens**:
  - `App.tsx`: Main entry point with navigation setup
  - `LocalPassPlayScreen.tsx`: Screen for local multiplayer
  - `TutorialScreen.tsx`: Interactive tutorial screen
  - `CustomizationScreen.tsx`: User customization options

### Server (Node.js + Express)

Located in `core-game/SkullKingServer/`

- **Main Components**:
  - `app.js`: Main server file with route and WebSocket setup
  - `routes/gameEngine.js`: Core game logic for bidding, trick resolution, and scoring
  - `routes/leaderboards.js`: Endpoints for tracking scores and achievements

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/pirate-king-reactnative.git
   cd pirate-king-reactnative
   ```

2. Install dependencies for the client:

   ```
   cd core-game/SkullKingClient
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../SkullKingServer
   npm install
   ```

### Running the Game

1. Start the server:

   ```
   cd core-game/SkullKingServer
   npm start
   ```

2. Start the client (in a separate terminal):
   ```
   cd core-game/SkullKingClient
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Game Rules

1. **Setup**: Each player is dealt a hand of cards.
2. **Bidding**: Players bid on how many tricks they think they'll win in the round.
3. **Trick-Taking**: Players take turns playing one card each. The highest card wins the trick.
4. **Scoring**:
   - Players who meet their bid exactly earn bonus points
   - Players who miss their bid lose points
   - Special cards can provide score multipliers

## Development Roadmap

- [ ] Complete user interface with animations
- [ ] Add sound effects and background music
- [ ] Implement AI opponents for single-player mode
- [ ] Expand customization options
- [ ] Add in-game chat for online multiplayer

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the card game "Skull King"
- Thanks to all contributors
