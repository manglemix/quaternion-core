# quaternion-core

Quaternion library written in Rust.

This provides basic operations on Quaternion and interconversion with several 
attitude representations as generic functions (Supports f32 & f64).

## Usage

Add this to your `Cargo.toml`:

```toml
[dependencies]
quaternion-core = "0.2"
```

## Conversion

![conversion](./conversion.png)

Interconversion with 24 different Euler angles (12 each of `Intrinsic` and `Extrinsic`) is possible!!

## Features

`Cargo.toml`:

```toml
[dependencies.quaternion-core]
version = "0.2"

# Uncomment if you wish to use FMA and SIMD.
#features = ["fma", "simd"]

# Uncomment if you wish to use in "no_std" environment.
#default-features = false
#features = ["libm"]
```

### fma

This library uses the 
[mul_add](https://doc.rust-lang.org/std/primitive.f64.html#method.mul_add) 
method mainly to improve the performance, but by default it is replace with a unfused multiply-add 
(`s*a + b`) . If you wish to use mul_add method, enable the `fma` feature.

If your CPU does not support FMA instructions, or if you use `libm` (running in no_std 
environment), enabling the `fma` feature may cause slowdown of computation speed. Also, 
due to rounding error, results of `s.mul_add(a, b)` and `s*a + b` will not match perfectly.

### simd

___Attension!! : This feature may have bugs and should not be enabled at first.___

By enabling this feature, the SIMD implementation using the 
[std::arch](https://docs.rs/rustc-std-workspace-std/1.0.1/std/arch/index.html) 
module can be used in some functions.

Currently (`version="0.2.0"`) only `x86` and `x86_64` architectures are supported.

To enable this feature, CPU must support these instruction sets:
```
SSE, SSE2, SSE3, SSE4.1, AVX, FMA
```

Also, specify the `-C target-cpu` flag to the compiler as follows:

```console
$ RUSTFLAGS='-C target-cpu=native' cargo build
```

### libm & default-feature = false

These options allow for use in the `no_std` environment. 
In this case, mathematical functions (e.g. sin, cos, sqrt ...) are provided by 
[libm](https://crates.io/crates/libm).

## Example

`src/main.rs`:

```rust
use quaternion_core as quat;

const PI: f64 = std::f64::consts::PI;
const EPSILON: f64 = 1e-14;

fn main() {
    // Generates a quaternion representing the
    // rotation of π/2[rad] around the y-axis.
    let q = quat::from_axis_angle([0.0, 1.0, 0.0], PI/2.0);

    // Rotate the point.
    let r = quat::point_rotation(q, [2.0, 2.0, 0.0]);

    // Check if the calculation is correct.
    let diff = quat::sub_vec([0.0, 2.0, -2.0], r);
    for val in diff {
        assert!( val.abs() < EPSILON );
    }
}
```

## License

Licensed under either of
[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
or
[MIT License](https://opensource.org/licenses/MIT)
at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted 
for inclusion in the work by you, as defined in the Apache-2.0 license, shall 
be dual licensed as above, without any additional terms or conditions.
