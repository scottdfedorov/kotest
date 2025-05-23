plugins {
   id("kotest-jvm-conventions")
   id("kotest-publishing-conventions")
}

kotlin {
   sourceSets {
      val jvmMain by getting {
         dependencies {
            api(projects.kotestCommon)
            api(projects.kotestAssertions.kotestAssertionsShared)
            api(projects.kotestFramework.kotestFrameworkEngine)
            api(libs.junit4)
            api(libs.kotlinx.coroutines.core)
         }
      }

      val jvmTest by getting {
         dependencies {
            implementation(projects.kotestAssertions.kotestAssertionsCore)
            implementation(libs.junit.platform.testkit)
         }
      }
   }
}
