plugins {
   id("java")
   kotlin("multiplatform")
   id("java-library")
   id("org.jetbrains.kotlin.plugin.spring")

}

kotlin {

   targets {
      jvm()
   }

   sourceSets {

      val commonMain by getting {
         dependencies {
            compileOnly(kotlin("stdlib"))
            implementation(kotlin("reflect"))
         }
      }

      val jvmMain by getting {
         dependencies {
            implementation(project(Projects.Framework.engine))
            implementation(project(Projects.Framework.api))
            implementation(Libs.Jdom.jdom2)
         }
      }

      val jvmTest by getting {
         dependsOn(jvmMain)
         dependencies {
            implementation(project(Projects.JunitRunner))
         }
      }

      all {
         languageSettings.optIn("kotlin.time.ExperimentalTime")
         languageSettings.optIn("kotlin.experimental.ExperimentalTypeInference")
      }
   }
}

apply(from = "../../publish-mpp.gradle.kts")
