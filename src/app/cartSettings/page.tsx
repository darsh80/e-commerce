import SettingsHero from "./components/SettingsHero";
import SettingsNavigation from "./components/SettingsNavigation";
import ProfileForm from "./components/ProfileForm";
import ChangePassword from "./components/ChangePassword";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <SettingsHero />

      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          <SettingsNavigation />

          <main className="flex-1 min-w-0">
            <div className="space-y-6">

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Account Settings
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Update your profile information and change your password
                </p>
              </div>

              <ProfileForm />

              <ChangePassword />

            </div>
          </main>

        </div>
      </div>
    </main>
  );
}