package io.kotest.matchers.string

import io.kotest.assertions.print.print
import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.neverNullMatcher
import io.kotest.matchers.should
import io.kotest.matchers.shouldNot

infix fun <A : CharSequence> A?.shouldEndWith(suffix: CharSequence): A {
   this should endWith(suffix)
   return this!!
}

infix fun <A : CharSequence> A?.shouldNotEndWith(suffix: CharSequence): A {
   this shouldNot endWith(suffix)
   return this!!
}

fun endWith(suffix: CharSequence): Matcher<CharSequence?> = neverNullMatcher { value ->
   MatcherResult(
      value.endsWith(suffix),
      { "${value.print().value} should end with ${suffix.print().value}" },
      {
         "${value.print().value} should not end with ${suffix.print().value}"
      })
}
