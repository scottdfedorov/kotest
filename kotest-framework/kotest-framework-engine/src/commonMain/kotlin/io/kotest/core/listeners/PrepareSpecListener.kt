package io.kotest.core.listeners

import io.kotest.core.extensions.Extension
import io.kotest.core.spec.Spec
import kotlin.reflect.KClass

/**
 * This listener is invoked before any tests execute for a spec.
 *
 * Invoked once per spec class if the spec is not skipped.
 *
 * If a spec is instantiated multiple times because the isolation mode
 * is set to create multiple instances, then this listener will not be
 * invoked multiple times.
 */
interface PrepareSpecListener : Extension {

   /**
    * Called once per [Spec], when the engine is preparing to
    * execute the tests for that spec.
    *
    * Regardless of how many times the spec is instantiated, for example, if
    * [io.kotest.core.spec.IsolationMode.InstancePerRoot] isolation mode is used,
    * this callback will only be invoked once.
    *
    * @param kclass the [Spec] class
    */
   suspend fun prepareSpec(kclass: KClass<out Spec>): Unit = Unit
}
