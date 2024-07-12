/**
 * Dans ce fichier, on va créer des méthodes utilitaires personnalisées pour gérer :
 * - Le stockage local du navigateur (avec localStorage)
 * - Le stockage de session du navigateur (avec sessionStorage)
 * 
 * localStorage : Les informations enresgitrées sont conservées après la fermeture du navigateur, tant qu'il n'a pas été nettoyé à la main (ou via un logiciel de nettoyage, comme CCleaner).
 * sessionStorage : Les informations sont stockées uniquement jusqu'à la fermeture du navigateur ou de l'onglet.
 */



/**
 * localStorage methods
 */

export const setData = (key, value) => {
  localStorage.setItem(key, value);
}

export const getData = (key) => {
  localStorage.getItem(key);
}

export const getAllDatas = () => {
  return localStorage;
}

export const removeData = (key) => {
  localStorage.removeItem(key);
}

export const removeAllDatas = () => {
  localStorage.clear();
}

/**
 * sessionStorage methods
 */

export const setSessionData = (key, value) => {
  sessionStorage.setItem(key, value);
}

export const getSessionData = (key) => {
  sessionStorage.getItem(key);
}

export const getAllSessionDatas = () => {
  return sessionStorage;
}

export const removeSessionData = (key) => {
  sessionStorage.removeItem(key);
}

export const removeAllSessionDatas = () => {
  sessionStorage.clear();
}