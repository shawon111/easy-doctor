async function requestSettingsApi(url, options) {
  const response = await fetch(url, options);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "Settings request failed.");
  }

  return payload;
}

export async function fetchSettings() {
  const payload = await requestSettingsApi("/api/setting", {
    cache: "no-store",
  });
  return payload.data;
}

export async function saveAccountSettings(account) {
  const payload = await requestSettingsApi("/api/setting", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(account),
  });
  return payload.data;
}

export async function saveProfileSettings(profile) {
  const payload = await requestSettingsApi("/api/setting", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ profile }),
  });
  return payload.data;
}

export async function saveNotificationPreference(preference) {
  const payload = await requestSettingsApi("/api/setting", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notificationPreferences: preference }),
  });
  return payload.data;
}

export async function savePassword(passwords) {
  return requestSettingsApi("/api/setting/password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(passwords),
  });
}

export async function signOut() {
  return requestSettingsApi("/api/auth/logout", { method: "POST" });
}

export async function deleteAccount(confirmation) {
  return requestSettingsApi("/api/setting", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(confirmation),
  });
}
