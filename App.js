import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import KartuProfil from "./components/KartuProfil";

export default function App() {

  const [kodeKelas, setKodeKelas] = useState('');
  const [isHadir, setIsHadir] = useState(false);
  const [waktuAbsen, setWaktuAbsen] = useState('');
  const [jamRealtime, setJamRealtime] = useState('Memuat jam...');

  const studentData = {
    nama: 'Bizlee',
    nim: '0320240020',
    prodi: 'MI - Politeknik Astra',
  };

  useEffect(() => {
    console.log('[Mounting] Aplikasi Presensi Dibuka');

    const intervalJam = setInterval(() => {
      const waktu = new Date().toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });
      setJamRealtime(waktu);
    }, 1000);

    return () => {
      console.log('[Unmounting] Aplikasi Ditutup');
      clearInterval(intervalJam);
    };
  }, []);

  useEffect(() => {
    if (isHadir === true) {
      console.log(`[Updating] Sukses presensi pada pukul: ${waktuAbsen}`);
    }
  }, [isHadir]);

  const handleAbsen = () => {
    if (kodeKelas.trim() === '') {
      alert('Kode kelas tidak boleh kosong!');
      return;
    }

    setIsHadir(true);
    setWaktuAbsen(jamRealtime);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sistem Presensi</Text>
          <Text style={styles.clockText}>{jamRealtime}</Text>
        </View>

        <KartuProfil students={studentData} />

        <View style={styles.actionSection}>
          {isHadir ? (
            <View style={styles.successCard}>
              <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png'}}
                style={styles.successIcon}
              />
              <Text style={styles.successText}>Presensi Berhasil!</Text>
              <Text style={styles.timeText}>
                Tercatat pada: {waktuAbsen}
              </Text>
              <Text style={styles.codeText}>
                Kode terverifikasi: {kodeKelas}
              </Text>
            </View>
          ) : (
            <View style={styles.inputCard}>
              <Text style={styles.instuctionText}>Masukkan Kode Kelas:</Text>
              <Text style={styles.noteText}>
                (Simulasi dari hasil Scan QR Kamera )
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Contoh: MI - 2A"
                value={kodeKelas}
                onChangeText={setKodeKelas}
                autoCapitalize="characters"
              />

              <TouchableOpacity 
                style={styles.buttonSubmit} 
                onPress={handleAbsen}
              >
                <Text style={styles.buttonText}>
                  Konfirmasi Kehadiran
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}