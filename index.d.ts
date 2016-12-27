// Type definitions for node-delta 1.0.0
// Project: https://github.com/endel/node-delta
// Definitions by: Endel Dreyer <https://github.com/endel/>

/// <reference types="node" />

declare module "node-delta" {
    export function create(origin: Buffer, target: Buffer): Buffer;
    export function apply(origin: Buffer, delta: Buffer): Buffer;
}

