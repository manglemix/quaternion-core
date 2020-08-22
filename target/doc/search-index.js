var searchIndex = JSON.parse('{\
"num_traits":{"doc":"Numeric traits for generic mathematics","i":[[3,"ParseFloatError","num_traits","",null,null],[12,"kind","","",0,null],[4,"FloatErrorKind","","",null,null],[13,"Empty","","",1,null],[13,"Invalid","","",1,null],[5,"clamp","","A value bounded by a minimum and a maximum",null,[[["partialord",8]],["partialord",8]]],[5,"clamp_min","","A value bounded by a minimum value",null,[[["partialord",8]],["partialord",8]]],[5,"clamp_max","","A value bounded by a maximum value",null,[[["partialord",8]],["partialord",8]]],[0,"bounds","","",null,null],[8,"Bounded","num_traits::bounds","Numbers which have upper and lower bounds",null,null],[10,"min_value","","returns the smallest finite number this type can represent",2,[[]]],[10,"max_value","","returns the largest finite number this type can represent",2,[[]]],[0,"cast","num_traits","",null,null],[5,"cast","num_traits::cast","Cast from one machine scalar to another.",null,[[["numcast",8]],[["numcast",8],["option",4]]]],[8,"ToPrimitive","","A generic trait for converting a value to a number.",null,null],[11,"to_isize","","Converts the value of `self` to an `isize`. If the value…",3,[[],["option",4]]],[11,"to_i8","","Converts the value of `self` to an `i8`. If the value…",3,[[],["option",4]]],[11,"to_i16","","Converts the value of `self` to an `i16`. If the value…",3,[[],["option",4]]],[11,"to_i32","","Converts the value of `self` to an `i32`. If the value…",3,[[],["option",4]]],[10,"to_i64","","Converts the value of `self` to an `i64`. If the value…",3,[[],["option",4]]],[11,"to_i128","","Converts the value of `self` to an `i128`. If the value…",3,[[],["option",4]]],[11,"to_usize","","Converts the value of `self` to a `usize`. If the value…",3,[[],["option",4]]],[11,"to_u8","","Converts the value of `self` to a `u8`. If the value…",3,[[],["option",4]]],[11,"to_u16","","Converts the value of `self` to a `u16`. If the value…",3,[[],["option",4]]],[11,"to_u32","","Converts the value of `self` to a `u32`. If the value…",3,[[],["option",4]]],[10,"to_u64","","Converts the value of `self` to a `u64`. If the value…",3,[[],["option",4]]],[11,"to_u128","","Converts the value of `self` to a `u128`. If the value…",3,[[],["option",4]]],[11,"to_f32","","Converts the value of `self` to an `f32`. If the value…",3,[[],["option",4]]],[11,"to_f64","","Converts the value of `self` to an `f64`. If the value…",3,[[],["option",4]]],[8,"FromPrimitive","","A generic trait for converting a number to a value.",null,null],[11,"from_isize","","Converts an `isize` to return an optional value of this…",4,[[],["option",4]]],[11,"from_i8","","Converts an `i8` to return an optional value of this type.…",4,[[],["option",4]]],[11,"from_i16","","Converts an `i16` to return an optional value of this…",4,[[],["option",4]]],[11,"from_i32","","Converts an `i32` to return an optional value of this…",4,[[],["option",4]]],[10,"from_i64","","Converts an `i64` to return an optional value of this…",4,[[],["option",4]]],[11,"from_i128","","Converts an `i128` to return an optional value of this…",4,[[],["option",4]]],[11,"from_usize","","Converts a `usize` to return an optional value of this…",4,[[],["option",4]]],[11,"from_u8","","Converts an `u8` to return an optional value of this type.…",4,[[],["option",4]]],[11,"from_u16","","Converts an `u16` to return an optional value of this…",4,[[],["option",4]]],[11,"from_u32","","Converts an `u32` to return an optional value of this…",4,[[],["option",4]]],[10,"from_u64","","Converts an `u64` to return an optional value of this…",4,[[],["option",4]]],[11,"from_u128","","Converts an `u128` to return an optional value of this…",4,[[],["option",4]]],[11,"from_f32","","Converts a `f32` to return an optional value of this type.…",4,[[],["option",4]]],[11,"from_f64","","Converts a `f64` to return an optional value of this type.…",4,[[],["option",4]]],[8,"NumCast","","An interface for casting between machine scalars.",null,null],[10,"from","","Creates a number from another value that can be converted…",5,[[["toprimitive",8]],["option",4]]],[8,"AsPrimitive","","A generic interface for casting between machine scalars…",null,null],[10,"as_","","Convert a value to another, using the `as` operator.",6,[[]]],[0,"float","num_traits","",null,null],[8,"FloatCore","num_traits::float","Generic trait for floating point numbers that works with…",null,null],[10,"infinity","","Returns positive infinity.",7,[[]]],[10,"neg_infinity","","Returns negative infinity.",7,[[]]],[10,"nan","","Returns NaN.",7,[[]]],[10,"neg_zero","","Returns `-0.0`.",7,[[]]],[10,"min_value","","Returns the smallest finite value that this type can…",7,[[]]],[10,"min_positive_value","","Returns the smallest positive, normalized value that this…",7,[[]]],[10,"epsilon","","Returns epsilon, a small positive value.",7,[[]]],[10,"max_value","","Returns the largest finite value that this type can…",7,[[]]],[11,"is_nan","","Returns `true` if the number is NaN.",7,[[]]],[11,"is_infinite","","Returns `true` if the number is infinite.",7,[[]]],[11,"is_finite","","Returns `true` if the number is neither infinite or NaN.",7,[[]]],[11,"is_normal","","Returns `true` if the number is neither zero, infinite,…",7,[[]]],[10,"classify","","Returns the floating point category of the number. If only…",7,[[],["fpcategory",4]]],[11,"floor","","Returns the largest integer less than or equal to a number.",7,[[]]],[11,"ceil","","Returns the smallest integer greater than or equal to a…",7,[[]]],[11,"round","","Returns the nearest integer to a number. Round half-way…",7,[[]]],[11,"trunc","","Return the integer part of a number.",7,[[]]],[11,"fract","","Returns the fractional part of a number.",7,[[]]],[11,"abs","","Computes the absolute value of `self`. Returns…",7,[[]]],[11,"signum","","Returns a number that represents the sign of `self`.",7,[[]]],[11,"is_sign_positive","","Returns `true` if `self` is positive, including `+0.0` and…",7,[[]]],[11,"is_sign_negative","","Returns `true` if `self` is negative, including `-0.0` and…",7,[[]]],[11,"min","","Returns the minimum of the two numbers.",7,[[]]],[11,"max","","Returns the maximum of the two numbers.",7,[[]]],[11,"recip","","Returns the reciprocal (multiplicative inverse) of the…",7,[[]]],[11,"powi","","Raise a number to an integer power.",7,[[]]],[10,"to_degrees","","Converts to degrees, assuming the number is in radians.",7,[[]]],[10,"to_radians","","Converts to radians, assuming the number is in degrees.",7,[[]]],[10,"integer_decode","","Returns the mantissa, base 2 exponent, and sign as…",7,[[]]],[8,"Float","","Generic trait for floating point numbers",null,null],[10,"nan","","Returns the `NaN` value.",8,[[]]],[10,"infinity","","Returns the infinite value.",8,[[]]],[10,"neg_infinity","","Returns the negative infinite value.",8,[[]]],[10,"neg_zero","","Returns `-0.0`.",8,[[]]],[10,"min_value","","Returns the smallest finite value that this type can…",8,[[]]],[10,"min_positive_value","","Returns the smallest positive, normalized value that this…",8,[[]]],[11,"epsilon","","Returns epsilon, a small positive value.",8,[[]]],[10,"max_value","","Returns the largest finite value that this type can…",8,[[]]],[10,"is_nan","","Returns `true` if this value is `NaN` and false otherwise.",8,[[]]],[10,"is_infinite","","Returns `true` if this value is positive infinity or…",8,[[]]],[10,"is_finite","","Returns `true` if this number is neither infinite nor `NaN`.",8,[[]]],[10,"is_normal","","Returns `true` if the number is neither zero, infinite,…",8,[[]]],[10,"classify","","Returns the floating point category of the number. If only…",8,[[],["fpcategory",4]]],[10,"floor","","Returns the largest integer less than or equal to a number.",8,[[]]],[10,"ceil","","Returns the smallest integer greater than or equal to a…",8,[[]]],[10,"round","","Returns the nearest integer to a number. Round half-way…",8,[[]]],[10,"trunc","","Return the integer part of a number.",8,[[]]],[10,"fract","","Returns the fractional part of a number.",8,[[]]],[10,"abs","","Computes the absolute value of `self`. Returns…",8,[[]]],[10,"signum","","Returns a number that represents the sign of `self`.",8,[[]]],[10,"is_sign_positive","","Returns `true` if `self` is positive, including `+0.0`,…",8,[[]]],[10,"is_sign_negative","","Returns `true` if `self` is negative, including `-0.0`,…",8,[[]]],[10,"mul_add","","Fused multiply-add. Computes `(self * a) + b` with only…",8,[[]]],[10,"recip","","Take the reciprocal (inverse) of a number, `1/x`.",8,[[]]],[10,"powi","","Raise a number to an integer power.",8,[[]]],[10,"powf","","Raise a number to a floating point power.",8,[[]]],[10,"sqrt","","Take the square root of a number.",8,[[]]],[10,"exp","","Returns `e^(self)`, (the exponential function).",8,[[]]],[10,"exp2","","Returns `2^(self)`.",8,[[]]],[10,"ln","","Returns the natural logarithm of the number.",8,[[]]],[10,"log","","Returns the logarithm of the number with respect to an…",8,[[]]],[10,"log2","","Returns the base 2 logarithm of the number.",8,[[]]],[10,"log10","","Returns the base 10 logarithm of the number.",8,[[]]],[11,"to_degrees","","Converts radians to degrees.",8,[[]]],[11,"to_radians","","Converts degrees to radians.",8,[[]]],[10,"max","","Returns the maximum of the two numbers.",8,[[]]],[10,"min","","Returns the minimum of the two numbers.",8,[[]]],[10,"abs_sub","","The positive difference of two numbers.",8,[[]]],[10,"cbrt","","Take the cubic root of a number.",8,[[]]],[10,"hypot","","Calculate the length of the hypotenuse of a right-angle…",8,[[]]],[10,"sin","","Computes the sine of a number (in radians).",8,[[]]],[10,"cos","","Computes the cosine of a number (in radians).",8,[[]]],[10,"tan","","Computes the tangent of a number (in radians).",8,[[]]],[10,"asin","","Computes the arcsine of a number. Return value is in…",8,[[]]],[10,"acos","","Computes the arccosine of a number. Return value is in…",8,[[]]],[10,"atan","","Computes the arctangent of a number. Return value is in…",8,[[]]],[10,"atan2","","Computes the four quadrant arctangent of `self` (`y`) and…",8,[[]]],[10,"sin_cos","","Simultaneously computes the sine and cosine of the number,…",8,[[]]],[10,"exp_m1","","Returns `e^(self) - 1` in a way that is accurate even if…",8,[[]]],[10,"ln_1p","","Returns `ln(1+n)` (natural logarithm) more accurately than…",8,[[]]],[10,"sinh","","Hyperbolic sine function.",8,[[]]],[10,"cosh","","Hyperbolic cosine function.",8,[[]]],[10,"tanh","","Hyperbolic tangent function.",8,[[]]],[10,"asinh","","Inverse hyperbolic sine function.",8,[[]]],[10,"acosh","","Inverse hyperbolic cosine function.",8,[[]]],[10,"atanh","","Inverse hyperbolic tangent function.",8,[[]]],[10,"integer_decode","","Returns the mantissa, base 2 exponent, and sign as…",8,[[]]],[8,"FloatConst","","",null,null],[10,"E","","Return Euler’s number.",9,[[]]],[10,"FRAC_1_PI","","Return `1.0 / π`.",9,[[]]],[10,"FRAC_1_SQRT_2","","Return `1.0 / sqrt(2.0)`.",9,[[]]],[10,"FRAC_2_PI","","Return `2.0 / π`.",9,[[]]],[10,"FRAC_2_SQRT_PI","","Return `2.0 / sqrt(π)`.",9,[[]]],[10,"FRAC_PI_2","","Return `π / 2.0`.",9,[[]]],[10,"FRAC_PI_3","","Return `π / 3.0`.",9,[[]]],[10,"FRAC_PI_4","","Return `π / 4.0`.",9,[[]]],[10,"FRAC_PI_6","","Return `π / 6.0`.",9,[[]]],[10,"FRAC_PI_8","","Return `π / 8.0`.",9,[[]]],[10,"LN_10","","Return `ln(10.0)`.",9,[[]]],[10,"LN_2","","Return `ln(2.0)`.",9,[[]]],[10,"LOG10_E","","Return `log10(e)`.",9,[[]]],[10,"LOG2_E","","Return `log2(e)`.",9,[[]]],[10,"PI","","Return Archimedes’ constant `π`.",9,[[]]],[10,"SQRT_2","","Return `sqrt(2.0)`.",9,[[]]],[11,"TAU","","Return the full circle constant `τ`.",9,[[]]],[0,"identities","num_traits","",null,null],[5,"zero","num_traits::identities","Returns the additive identity, `0`.",null,[[],["zero",8]]],[5,"one","","Returns the multiplicative identity, `1`.",null,[[],["one",8]]],[8,"Zero","","Defines an additive identity element for `Self`.",null,null],[10,"zero","","Returns the additive identity element of `Self`, `0`. #…",10,[[]]],[11,"set_zero","","Sets `self` to the additive identity element of `Self`, `0`.",10,[[]]],[10,"is_zero","","Returns `true` if `self` is equal to the additive identity.",10,[[]]],[8,"One","","Defines a multiplicative identity element for `Self`.",null,null],[10,"one","","Returns the multiplicative identity element of `Self`, `1`.",11,[[]]],[11,"set_one","","Sets `self` to the multiplicative identity element of…",11,[[]]],[11,"is_one","","Returns `true` if `self` is equal to the multiplicative…",11,[[]]],[0,"int","num_traits","",null,null],[8,"PrimInt","num_traits::int","Generic trait for primitive integers.",null,null],[10,"count_ones","","Returns the number of ones in the binary representation of…",12,[[]]],[10,"count_zeros","","Returns the number of zeros in the binary representation…",12,[[]]],[10,"leading_zeros","","Returns the number of leading zeros in the binary…",12,[[]]],[10,"trailing_zeros","","Returns the number of trailing zeros in the binary…",12,[[]]],[10,"rotate_left","","Shifts the bits to the left by a specified amount amount,…",12,[[]]],[10,"rotate_right","","Shifts the bits to the right by a specified amount amount,…",12,[[]]],[10,"signed_shl","","Shifts the bits to the left by a specified amount amount,…",12,[[]]],[10,"signed_shr","","Shifts the bits to the right by a specified amount amount,…",12,[[]]],[10,"unsigned_shl","","Shifts the bits to the left by a specified amount amount,…",12,[[]]],[10,"unsigned_shr","","Shifts the bits to the right by a specified amount amount,…",12,[[]]],[10,"swap_bytes","","Reverses the byte order of the integer.",12,[[]]],[10,"from_be","","Convert an integer from big endian to the target\'s…",12,[[]]],[10,"from_le","","Convert an integer from little endian to the target\'s…",12,[[]]],[10,"to_be","","Convert `self` to big endian from the target\'s endianness.",12,[[]]],[10,"to_le","","Convert `self` to little endian from the target\'s…",12,[[]]],[10,"pow","","Raises self to the power of `exp`, using exponentiation by…",12,[[]]],[0,"ops","num_traits","",null,null],[0,"checked","num_traits::ops","",null,null],[8,"CheckedAdd","num_traits::ops::checked","Performs addition that returns `None` instead of wrapping…",null,null],[10,"checked_add","","Adds two numbers, checking for overflow. If overflow…",13,[[],["option",4]]],[8,"CheckedSub","","Performs subtraction that returns `None` instead of…",null,null],[10,"checked_sub","","Subtracts two numbers, checking for underflow. If…",14,[[],["option",4]]],[8,"CheckedMul","","Performs multiplication that returns `None` instead of…",null,null],[10,"checked_mul","","Multiplies two numbers, checking for underflow or…",15,[[],["option",4]]],[8,"CheckedDiv","","Performs division that returns `None` instead of panicking…",null,null],[10,"checked_div","","Divides two numbers, checking for underflow, overflow and…",16,[[],["option",4]]],[8,"CheckedRem","","Performs an integral remainder that returns `None` instead…",null,null],[10,"checked_rem","","Finds the remainder of dividing two numbers, checking for…",17,[[],["option",4]]],[8,"CheckedNeg","","Performs negation that returns `None` if the result can\'t…",null,null],[10,"checked_neg","","Negates a number, returning `None` for results that can\'t…",18,[[],["option",4]]],[8,"CheckedShl","","Performs a left shift that returns `None` on shifts larger…",null,null],[10,"checked_shl","","Checked shift left. Computes `self << rhs`, returning…",19,[[],["option",4]]],[8,"CheckedShr","","Performs a right shift that returns `None` on shifts…",null,null],[10,"checked_shr","","Checked shift right. Computes `self >> rhs`, returning…",20,[[],["option",4]]],[0,"inv","num_traits::ops","",null,null],[8,"Inv","num_traits::ops::inv","Unary operator for retrieving the multiplicative inverse,…",null,null],[16,"Output","","The result after applying the operator.",21,null],[10,"inv","","Returns the multiplicative inverse of `self`.",21,[[]]],[0,"mul_add","num_traits::ops","",null,null],[8,"MulAdd","num_traits::ops::mul_add","Fused multiply-add. Computes `(self * a) + b` with only…",null,null],[16,"Output","","The resulting type after applying the fused multiply-add.",22,null],[10,"mul_add","","Performs the fused multiply-add operation.",22,[[]]],[8,"MulAddAssign","","The fused multiply-add assignment operation.",null,null],[10,"mul_add_assign","","Performs the fused multiply-add operation.",23,[[]]],[0,"saturating","num_traits::ops","",null,null],[8,"Saturating","num_traits::ops::saturating","Saturating math operations",null,null],[10,"saturating_add","","Saturating addition operator. Returns a+b, saturating at…",24,[[]]],[10,"saturating_sub","","Saturating subtraction operator. Returns a-b, saturating…",24,[[]]],[0,"wrapping","num_traits::ops","",null,null],[8,"WrappingAdd","num_traits::ops::wrapping","Performs addition that wraps around on overflow.",null,null],[10,"wrapping_add","","Wrapping (modular) addition. Computes `self + other`,…",25,[[]]],[8,"WrappingSub","","Performs subtraction that wraps around on overflow.",null,null],[10,"wrapping_sub","","Wrapping (modular) subtraction. Computes `self - other`,…",26,[[]]],[8,"WrappingMul","","Performs multiplication that wraps around on overflow.",null,null],[10,"wrapping_mul","","Wrapping (modular) multiplication. Computes `self *…",27,[[]]],[8,"WrappingShl","","Performs a left shift that does not panic.",null,null],[10,"wrapping_shl","","Panic-free bitwise shift-left; yields `self << mask(rhs)`,…",28,[[]]],[8,"WrappingShr","","Performs a right shift that does not panic.",null,null],[10,"wrapping_shr","","Panic-free bitwise shift-right; yields `self >>…",29,[[]]],[0,"pow","num_traits","",null,null],[5,"pow","num_traits::pow","Raises a value to the power of exp, using exponentiation…",null,[[["mul",8],["one",8],["clone",8]],[["one",8],["clone",8],["mul",8]]]],[5,"checked_pow","","Raises a value to the power of exp, returning `None` if an…",null,[[["checkedmul",8],["one",8],["clone",8]],[["checkedmul",8],["one",8],["clone",8],["option",4]]]],[8,"Pow","","Binary operator for raising a value to a power.",null,null],[16,"Output","","The result after applying the operator.",30,null],[10,"pow","","Returns `self` to the power `rhs`.",30,[[]]],[0,"real","num_traits","",null,null],[8,"Real","num_traits::real","A trait for real number types that do not necessarily have…",null,null],[10,"min_value","","Returns the smallest finite value that this type can…",31,[[]]],[10,"min_positive_value","","Returns the smallest positive, normalized value that this…",31,[[]]],[10,"epsilon","","Returns epsilon, a small positive value.",31,[[]]],[10,"max_value","","Returns the largest finite value that this type can…",31,[[]]],[10,"floor","","Returns the largest integer less than or equal to a number.",31,[[]]],[10,"ceil","","Returns the smallest integer greater than or equal to a…",31,[[]]],[10,"round","","Returns the nearest integer to a number. Round half-way…",31,[[]]],[10,"trunc","","Return the integer part of a number.",31,[[]]],[10,"fract","","Returns the fractional part of a number.",31,[[]]],[10,"abs","","Computes the absolute value of `self`. Returns…",31,[[]]],[10,"signum","","Returns a number that represents the sign of `self`.",31,[[]]],[10,"is_sign_positive","","Returns `true` if `self` is positive, including `+0.0`,…",31,[[]]],[10,"is_sign_negative","","Returns `true` if `self` is negative, including `-0.0`,…",31,[[]]],[10,"mul_add","","Fused multiply-add. Computes `(self * a) + b` with only…",31,[[]]],[10,"recip","","Take the reciprocal (inverse) of a number, `1/x`.",31,[[]]],[10,"powi","","Raise a number to an integer power.",31,[[]]],[10,"powf","","Raise a number to a real number power.",31,[[]]],[10,"sqrt","","Take the square root of a number.",31,[[]]],[10,"exp","","Returns `e^(self)`, (the exponential function).",31,[[]]],[10,"exp2","","Returns `2^(self)`.",31,[[]]],[10,"ln","","Returns the natural logarithm of the number.",31,[[]]],[10,"log","","Returns the logarithm of the number with respect to an…",31,[[]]],[10,"log2","","Returns the base 2 logarithm of the number.",31,[[]]],[10,"log10","","Returns the base 10 logarithm of the number.",31,[[]]],[10,"to_degrees","","Converts radians to degrees.",31,[[]]],[10,"to_radians","","Converts degrees to radians.",31,[[]]],[10,"max","","Returns the maximum of the two numbers.",31,[[]]],[10,"min","","Returns the minimum of the two numbers.",31,[[]]],[10,"abs_sub","","The positive difference of two numbers.",31,[[]]],[10,"cbrt","","Take the cubic root of a number.",31,[[]]],[10,"hypot","","Calculate the length of the hypotenuse of a right-angle…",31,[[]]],[10,"sin","","Computes the sine of a number (in radians).",31,[[]]],[10,"cos","","Computes the cosine of a number (in radians).",31,[[]]],[10,"tan","","Computes the tangent of a number (in radians).",31,[[]]],[10,"asin","","Computes the arcsine of a number. Return value is in…",31,[[]]],[10,"acos","","Computes the arccosine of a number. Return value is in…",31,[[]]],[10,"atan","","Computes the arctangent of a number. Return value is in…",31,[[]]],[10,"atan2","","Computes the four quadrant arctangent of `self` (`y`) and…",31,[[]]],[10,"sin_cos","","Simultaneously computes the sine and cosine of the number,…",31,[[]]],[10,"exp_m1","","Returns `e^(self) - 1` in a way that is accurate even if…",31,[[]]],[10,"ln_1p","","Returns `ln(1+n)` (natural logarithm) more accurately than…",31,[[]]],[10,"sinh","","Hyperbolic sine function.",31,[[]]],[10,"cosh","","Hyperbolic cosine function.",31,[[]]],[10,"tanh","","Hyperbolic tangent function.",31,[[]]],[10,"asinh","","Inverse hyperbolic sine function.",31,[[]]],[10,"acosh","","Inverse hyperbolic cosine function.",31,[[]]],[10,"atanh","","Inverse hyperbolic tangent function.",31,[[]]],[0,"sign","num_traits","",null,null],[5,"abs","num_traits::sign","Computes the absolute value.",null,[[["signed",8]],["signed",8]]],[5,"abs_sub","","The positive difference of two numbers.",null,[[["signed",8]],["signed",8]]],[5,"signum","","Returns the sign of the number.",null,[[["signed",8]],["signed",8]]],[8,"Signed","","Useful functions for signed numbers (i.e. numbers that can…",null,null],[10,"abs","","Computes the absolute value.",32,[[]]],[10,"abs_sub","","The positive difference of two numbers.",32,[[]]],[10,"signum","","Returns the sign of the number.",32,[[]]],[10,"is_positive","","Returns true if the number is positive and false if the…",32,[[]]],[10,"is_negative","","Returns true if the number is negative and false if the…",32,[[]]],[8,"Unsigned","","A trait for values which cannot be negative",null,null],[8,"Num","num_traits","The base trait for numeric types, covering `0` and `1`…",null,null],[16,"FromStrRadixErr","","",33,null],[10,"from_str_radix","","Convert from a string and radix <= 36.",33,[[],["result",4]]],[8,"NumOps","","The trait for types implementing basic numeric operations",null,null],[8,"NumRef","","The trait for `Num` types which also implement numeric…",null,null],[8,"RefNum","","The trait for references which implement numeric…",null,null],[8,"NumAssignOps","","The trait for types implementing numeric assignment…",null,null],[8,"NumAssign","","The trait for `Num` types which also implement assignment…",null,null],[8,"NumAssignRef","","The trait for `NumAssign` types which also implement…",null,null],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_string","","",0,[[],["string",3]]],[11,"from","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]]],"p":[[3,"ParseFloatError"],[4,"FloatErrorKind"],[8,"Bounded"],[8,"ToPrimitive"],[8,"FromPrimitive"],[8,"NumCast"],[8,"AsPrimitive"],[8,"FloatCore"],[8,"Float"],[8,"FloatConst"],[8,"Zero"],[8,"One"],[8,"PrimInt"],[8,"CheckedAdd"],[8,"CheckedSub"],[8,"CheckedMul"],[8,"CheckedDiv"],[8,"CheckedRem"],[8,"CheckedNeg"],[8,"CheckedShl"],[8,"CheckedShr"],[8,"Inv"],[8,"MulAdd"],[8,"MulAddAssign"],[8,"Saturating"],[8,"WrappingAdd"],[8,"WrappingSub"],[8,"WrappingMul"],[8,"WrappingShl"],[8,"WrappingShr"],[8,"Pow"],[8,"Real"],[8,"Signed"],[8,"Num"]]},\
"quaternion":{"doc":"Quaternion Libraly (f32 & f64)","i":[[5,"from_axis_angle","quaternion","回転角[rad]と軸ベクトルを指定してVersorを生成する．",null,[[["vector3",6]],["quaternion",6]]],[5,"to_axis_angle","","Versorから回転軸（単位ベクトル）と軸回りの回転角[rad]を求める．",null,[[["quaternion",6]]]],[5,"from_dcm","","位置ベクトル回転（`q v q*`）を表す方向余弦行列をVersorに変換する．",null,[[["dcm",6]],["quaternion",6]]],[5,"to_dcm","","位置ベクトル回転（`q v q*`）を表すVersorを，方向余弦行列に変換する．",null,[[["quaternion",6]],["dcm",6]]],[5,"to_euler_angle","","位置ベクトル回転（`q v q*`）を表すVersorを`z-y-x系`のオイラー角[rad]に変換する．",null,[[["quaternion",6]],["vector3",6]]],[5,"from_rotation_vector","","回転ベクトル(rotation vector)をVersorに変換",null,[[["vector3",6]],["quaternion",6]]],[5,"to_rotation_vector","","Versorを回転ベクトル(rotation vector)に変換",null,[[["quaternion",6]],["vector3",6]]],[5,"matrix_product","","方向余弦行列を用いてベクトルを回転させる．",null,[[["dcm",6],["vector3",6]],["vector3",6]]],[5,"system_trans","","右手系と左手系の四元数を変換",null,[[["quaternion",6]],["quaternion",6]]],[5,"dot_vec","","Dot product of vector.",null,[[["vector3",6]]]],[5,"dot","","Dot product of quaternion.",null,[[["quaternion",6]]]],[5,"cross_vec","","Cross product.",null,[[["vector3",6]],["vector3",6]]],[5,"add_vec","","Calcurate `a + b`",null,[[["vector3",6]],["vector3",6]]],[5,"add","","Calcurate `a + b`",null,[[["quaternion",6]],["quaternion",6]]],[5,"sub_vec","","Calculate `a - b`",null,[[["vector3",6]],["vector3",6]]],[5,"sub","","Calculate `a - b`",null,[[["quaternion",6]],["quaternion",6]]],[5,"scale_vec","","Calculate `s * v`",null,[[["vector3",6]],["vector3",6]]],[5,"scale","","Calculate `s * q`",null,[[["quaternion",6]],["quaternion",6]]],[5,"scale_add_vec","","Calculate `s*a + b`",null,[[["vector3",6]],["vector3",6]]],[5,"scale_add","","Calculate `s*a + b`",null,[[["quaternion",6]],["quaternion",6]]],[5,"norm_vec","","Calculate L2 norm.",null,[[["vector3",6]]]],[5,"norm","","Calculate L2 norm.",null,[[["quaternion",6]]]],[5,"normalize_vec","","Normalization of vector.",null,[[["vector3",6]],["vector3",6]]],[5,"normalize","","Normalization of quaternion.",null,[[["quaternion",6]],["quaternion",6]]],[5,"negate_vec","","ベクトルの符号を反転．",null,[[["vector3",6]],["vector3",6]]],[5,"negate","","四元数の符号を反転．",null,[[["quaternion",6]],["quaternion",6]]],[5,"mul_vec","","純虚四元数同士の積．",null,[[["vector3",6]],["quaternion",6]]],[5,"mul","","Hamilton product.",null,[[["quaternion",6]],["quaternion",6]]],[5,"conj","","共役四元数を求める．",null,[[["quaternion",6]],["quaternion",6]]],[5,"inv_vec","","逆純虚四元数を求める．",null,[[["vector3",6]],["vector3",6]]],[5,"inv","","逆四元数を求める．",null,[[["quaternion",6]],["quaternion",6]]],[5,"exp_vec","","Exponential function of vector.",null,[[["vector3",6]],["quaternion",6]]],[5,"exp","","Exponential function of quaternion.",null,[[["quaternion",6]],["quaternion",6]]],[5,"ln","","Natural logarithm of quaternion.",null,[[["quaternion",6]],["quaternion",6]]],[5,"ln_versor","","Natural logarithm of versor.",null,[[["quaternion",6]],["vector3",6]]],[5,"pow","","Power function of quaternion.",null,[[["quaternion",6]],["quaternion",6]]],[5,"pow_versor","","Power function of versor.",null,[[["quaternion",6]],["quaternion",6]]],[5,"vector_rotation","","位置ベクトルの回転",null,[[["vector3",6],["quaternion",6]],["vector3",6]]],[5,"frame_rotation","","座標系の回転",null,[[["vector3",6],["quaternion",6]],["vector3",6]]],[5,"rotate_a_to_b","","位置ベクトル`a`を 位置ベクトル`b`と同じ場所へ最短距離で回転させるVersorを求める．",null,[[["vector3",6]],["quaternion",6]]],[5,"lerp","","Lerp (Linear interpolation)",null,[[["quaternion",6]],["quaternion",6]]],[5,"slerp","","Slerp (Spherical linear interpolation)",null,[[["quaternion",6]],["quaternion",6]]],[6,"Vector3","","[i, j, k]",null,null],[6,"Quaternion","","(1, [i, j, k])",null,null],[6,"DCM","","Direction Cosine Matrix",null,null]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);