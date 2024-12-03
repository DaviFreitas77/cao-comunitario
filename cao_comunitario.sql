-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/12/2024 às 00:02
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cao_comunitario`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '0001_01_01_000003_create_usuarios_table', 1),
(5, '0001_01_01_000004_create_generos_table', 1),
(6, '0001_01_01_000005_create_idades_table', 1),
(7, '0001_01_01_000006_create_temperamentos_table', 1),
(8, '0001_01_01_000007_create_cuidados_table', 1),
(9, '0001_01_01_000008_create_tipo_pets_table', 1),
(10, '2024_11_09_030159_create_admins_table', 1),
(11, '2024_11_09_030748_create_cadastro_pets_table', 1),
(12, '2024_11_09_032816_create_temperamento_pets_table', 1),
(13, '2024_11_09_033304_create_cuidado_pets_table', 1),
(14, '2024_11_09_150439_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('5a3vYCqqSIyXl2f9SJvLW4NUoxm5TZBJOYgzhQ6B', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRUxvSEJzUXB6VDViYUJWQk14TVhOV2dteXBRZmJjUnRjUlRpeFlHdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9kYWJkLTI4MDQtN2YwLWI5MDAtOWExZS1iODA3LWFkNWItNjVmYy1hMDY4Lm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732318385),
('5tn6FFfHPBoQIQpENbLvgOexOrAKstGcGCuZu7XQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWVY3TTFuOHBHOEttZXFnVExqaU9zQ2hsdFlNMXlydW9FSTMwaVVEYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9kYWJkLTI4MDQtN2YwLWI5MDAtOWExZS1iODA3LWFkNWItNjVmYy1hMDY4Lm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732297000),
('dBbPsrVEMqTBiyv6Lx8IXDtGgm8mu9LqB5YZ7ELM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTU1SYnFGU0NsbXZTR2liNzI2Tzc4SkNPb0YxOUNTM2ZnZUprU3FCaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9jMGRhLTI4MDQtN2YwLWI5MDAtYThjNC0zMGNjLTQ3NGEtY2JlZC0xOWZjLm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1731183694),
('duQ7zEYKH8TbEElYlzUoOAhnGaG4L1OPvAqrJ3p7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFRacDBGZGg2TDI3aFlFbEhvS1N6T05JeFRZbFFleU5MNEdFRGZTRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly8xZjJmLTI4MDQtN2YwLWI5MDAtOWExZS01Y2NkLTc0NzctZThjMi02YjAxLm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732752610),
('FIlkH8kD4u58ABjDfoOKzIkpwQih2Cnjr7pbN10M', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY01QWjJWY0t3Y1g4OWhrQURLREQ1V0c4Rm5SajV4aXRDN2NGV01IZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9lYWIzLTI4MDQtN2YwLWI5MDAtOWExZS04NGNkLTNjNmEtYzBhOS0yOTEwLm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1733241192),
('kAk0FApldComLeB9W94q1PC9F8SoCb2OZaIPYm5J', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidnpaRk1maFNsbG1UQmg5eXRIOUVaVHM4ZFlnd2lCUXVja29MTkpiNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9mN2Q3LTI4MDQtN2YwLWI5MDAtZDAyYS1kMGMxLTYyMDMtY2QwYi0xYmU4Lm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1731627445),
('MeOUWao8HOpCrDcX2LfcFtNCp35Xy5ZM784DQ3oS', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib1dMaFp2dFlZSXdzVEx5TVNWY3dpRE5WSzlDdEpiWnpsS2tYRzlCUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly9kYWJkLTI4MDQtN2YwLWI5MDAtOWExZS1iODA3LWFkNWItNjVmYy1hMDY4Lm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1732305544),
('TPGVx6kYKlK0fC0HUcE3X2ISuYUSjsE0PYqgwqHI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVNBenYzV1BLbUpkamJEWjl5OWUyYjZqTjQzYVVncEhUaVZRRU1GWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjQ6Imh0dHA6Ly85NDY0LTI4MDQtN2YwLWI5MDAtZDAyYS00M2ItZGEwNC03ODI4LTc4ZjQubmdyb2stZnJlZS5hcHAiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1731513898),
('wIO4JIiPYHUSpoN8qQVKCa4Qr0EJVB4wuN8HFWye', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT2ZNaE45UlJabEs3R1ZKSEhhZUQxZHpyOVd2UkNRNk9UMjlxM1VxTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjU6Imh0dHA6Ly85MmQ3LTI4MDQtN2YwLWI5MDAtZDAyYS1hNDZkLTNhOTItZjk0Mi0xOWZkLm5ncm9rLWZyZWUuYXBwIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1731633739),
('Y4YchZP9dZhhnrnSOCoZQDxZwHGxLdb5RIBf8qyQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoieERiSUp2WjlRU3Z3YXpGdnA3VFNPSktuVWxmWW8xT2JFeENqUXJIcyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1731164974);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_admin`
--

CREATE TABLE `tb_admin` (
  `id_admin` int(10) UNSIGNED NOT NULL,
  `email_admin` varchar(255) NOT NULL,
  `senha_admin` varchar(255) NOT NULL,
  `imagem_admin` varchar(300) NOT NULL,
  `numero_admin` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_admin`
--

INSERT INTO `tb_admin` (`id_admin`, `email_admin`, `senha_admin`, `imagem_admin`, `numero_admin`) VALUES
(1, 'CaoComunitario@gmail.com', '123456', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/images%2Fc80dc656-5cd9-49a4-966e-ec27000f4daf.jpeg?alt=media&token=c9fac55e-e9fa-477b-9541-d12f6acde0dd', '11952041573');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cuidado`
--

CREATE TABLE `tb_cuidado` (
  `id_cuidado` int(10) UNSIGNED NOT NULL,
  `desc_cuidado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_cuidado`
--

INSERT INTO `tb_cuidado` (`id_cuidado`, `desc_cuidado`) VALUES
(1, 'Castrado'),
(2, 'Vacinado'),
(3, 'Vermifugado'),
(4, 'Tratamento antipulgas'),
(5, 'Precisa de cuidados');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cuidado_pet`
--

CREATE TABLE `tb_cuidado_pet` (
  `id_pet_cuidado` int(10) UNSIGNED NOT NULL,
  `fk_pet` int(10) UNSIGNED NOT NULL,
  `fk_cuidado` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_cuidado_pet`
--

INSERT INTO `tb_cuidado_pet` (`id_pet_cuidado`, `fk_pet`, `fk_cuidado`) VALUES
(79, 36, 1),
(80, 36, 3),
(81, 37, 1),
(82, 37, 2),
(83, 38, 1),
(84, 38, 2),
(85, 39, 5),
(86, 40, 5),
(87, 41, 1),
(88, 41, 3),
(89, 41, 4),
(90, 41, 2),
(91, 41, 5),
(92, 42, 3),
(93, 42, 1),
(94, 42, 2),
(95, 42, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_genero`
--

CREATE TABLE `tb_genero` (
  `id_genero` int(10) UNSIGNED NOT NULL,
  `desc_genero` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_genero`
--

INSERT INTO `tb_genero` (`id_genero`, `desc_genero`) VALUES
(1, 'Macho'),
(2, 'Fêmea');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_idade`
--

CREATE TABLE `tb_idade` (
  `id_idade` int(10) UNSIGNED NOT NULL,
  `desc_idade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_idade`
--

INSERT INTO `tb_idade` (`id_idade`, `desc_idade`) VALUES
(1, 'Filhote - 6 meses ou menos'),
(2, 'Jovem - 6 meses até 2 anos'),
(3, 'Adulto - 2 a 7 anos'),
(4, 'Não especificado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pet`
--

CREATE TABLE `tb_pet` (
  `id_pet` int(10) UNSIGNED NOT NULL,
  `nome_pet` varchar(255) NOT NULL,
  `tipo_pet` int(10) UNSIGNED NOT NULL,
  `genero_pet` int(10) UNSIGNED NOT NULL,
  `idade_pet` int(10) UNSIGNED NOT NULL,
  `raca_pet` varchar(255) DEFAULT NULL,
  `imagem_Pet` varchar(300) NOT NULL,
  `sobre_pet` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_pet`
--

INSERT INTO `tb_pet` (`id_pet`, `nome_pet`, `tipo_pet`, `genero_pet`, `idade_pet`, `raca_pet`, `imagem_Pet`, `sobre_pet`) VALUES
(36, 'Titi', 2, 1, 1, NULL, 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2F1a7d04ae-f6fe-4f06-8f9d-052d30c27e28.jpeg?alt=media&token=9c705bdd-f091-4b5f-822a-c17ed493ebe2', 'Gatinho muito lindo hehehehehehehehehehehehehehehejehehehejehrhrhrhrhrhrhrhrhrhehehehrhrhrhrhehrhrhehrhehehehehehehehehehehehehehehehehehehheehehehehehheehehehehehehehehehehehehhehrhrheheheehhehddhdhehehehehehhdhdhddhdhdhdhdhdhdhd'),
(37, 'Bob', 1, 1, 2, 'Puddle', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2F81685525-3d23-4ce1-b758-23cab30393ab.jpeg?alt=media&token=299ceed1-ef1f-4806-abbc-af485b6a4c6d', 'Jdjdjdhdh'),
(38, 'davi', 1, 1, 1, 'puddle', 'aaaa', 'asdasdsd'),
(39, 'Lobinho', 2, 1, 1, 'Não sei', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2F0e21cf73-02b3-4450-abb1-65b5d45bf68a.jpeg?alt=media&token=f2b5cdf1-c0fe-4127-a03b-4e06ad040437', 'Gatinho muito lindo'),
(40, 'Nala', 2, 2, 1, NULL, 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2F74250565-c0ee-4b68-abc7-fd8ab53015cc.jpeg?alt=media&token=1183332e-27cd-4587-a879-1dfd358e92e0', 'Gatinha maravilhosa'),
(41, 'Nala', 2, 2, 1, NULL, 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2Fc030e73c-7170-439a-a298-7f7076247390.jpeg?alt=media&token=442db4b4-65b7-440d-b704-50bd0321b370', 'Muito linda'),
(42, 'Simba', 1, 1, 3, 'Puddle', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/pets%2Fae7c87e5-313f-4f01-afa3-d160846657bf.jpeg?alt=media&token=bb3931a9-1077-4c70-b52f-fb870642c8ac', 'Lindo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pet_favoritado`
--

CREATE TABLE `tb_pet_favoritado` (
  `id_favorito` int(11) NOT NULL,
  `fk_usuario` int(11) UNSIGNED NOT NULL,
  `fk_pet` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_pet_favoritado`
--

INSERT INTO `tb_pet_favoritado` (`id_favorito`, `fk_usuario`, `fk_pet`) VALUES
(42, 15, 36),
(43, 15, 37),
(44, 15, 42),
(45, 15, 39),
(46, 15, 40),
(47, 15, 41);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pet_temperamento`
--

CREATE TABLE `tb_pet_temperamento` (
  `id_pet_temperamento` int(10) UNSIGNED NOT NULL,
  `fk_pet` int(10) UNSIGNED NOT NULL,
  `fk_temperamento` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_pet_temperamento`
--

INSERT INTO `tb_pet_temperamento` (`id_pet_temperamento`, `fk_pet`, `fk_temperamento`) VALUES
(101, 36, 5),
(102, 37, 3),
(103, 37, 1),
(104, 38, 1),
(105, 38, 2),
(106, 39, 1),
(107, 39, 2),
(108, 39, 7),
(109, 39, 10),
(110, 39, 11),
(111, 40, 1),
(112, 40, 7),
(113, 41, 2),
(114, 41, 4),
(115, 41, 3),
(116, 41, 6),
(117, 41, 5),
(118, 41, 8),
(119, 41, 10),
(120, 41, 7),
(121, 42, 3),
(122, 42, 6),
(123, 42, 5),
(124, 42, 8);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_temperamento`
--

CREATE TABLE `tb_temperamento` (
  `id_temperamento` int(10) UNSIGNED NOT NULL,
  `desc_temperamento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_temperamento`
--

INSERT INTO `tb_temperamento` (`id_temperamento`, `desc_temperamento`) VALUES
(1, 'Dócil'),
(2, 'Amigável'),
(3, 'Agressivo'),
(4, 'Calmo'),
(5, 'Protetor'),
(6, 'Obediente'),
(7, 'Brincalhão'),
(8, 'Arisco'),
(9, 'Quieto'),
(10, 'Sociável'),
(11, 'Curioso'),
(12, 'Tímido');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_tipo`
--

CREATE TABLE `tb_tipo` (
  `id_tipo` int(10) UNSIGNED NOT NULL,
  `desc_tipo_pet` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_tipo`
--

INSERT INTO `tb_tipo` (`id_tipo`, `desc_tipo_pet`) VALUES
(1, 'Cachorro'),
(2, 'Gato');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id_usuario` int(10) UNSIGNED NOT NULL,
  `nome_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `senha_usuario` varchar(255) NOT NULL,
  `numero_usuario` varchar(255) NOT NULL,
  `imagem_usuario` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_usuario`
--

INSERT INTO `tb_usuario` (`id_usuario`, `nome_usuario`, `email_usuario`, `senha_usuario`, `numero_usuario`, `imagem_usuario`) VALUES
(15, 'davi', 'davi@gmail.com', '123456', '11952041573', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/images%2F4eea722d-dde7-4021-9691-e429cd7b16b0.png?alt=media&token=5357a68f-59e3-4ff3-a218-aaa48656370c'),
(17, 'Faixa', 'davifreitaz999@gmail.com', '123456', '11952041573', 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/usuario%2Ffoto.jpg?alt=media&token=9a11cf8b-5188-4d54-a30c-38e1d67b7696');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices de tabela `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Índices de tabela `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Índices de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Índices de tabela `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Índices de tabela `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Índices de tabela `tb_cuidado`
--
ALTER TABLE `tb_cuidado`
  ADD PRIMARY KEY (`id_cuidado`);

--
-- Índices de tabela `tb_cuidado_pet`
--
ALTER TABLE `tb_cuidado_pet`
  ADD PRIMARY KEY (`id_pet_cuidado`),
  ADD KEY `tb_cuidado_pet_fk_pet_foreign` (`fk_pet`),
  ADD KEY `tb_cuidado_pet_fk_cuidado_foreign` (`fk_cuidado`);

--
-- Índices de tabela `tb_genero`
--
ALTER TABLE `tb_genero`
  ADD PRIMARY KEY (`id_genero`);

--
-- Índices de tabela `tb_idade`
--
ALTER TABLE `tb_idade`
  ADD PRIMARY KEY (`id_idade`);

--
-- Índices de tabela `tb_pet`
--
ALTER TABLE `tb_pet`
  ADD PRIMARY KEY (`id_pet`),
  ADD KEY `tb_pet_tipo_pet_foreign` (`tipo_pet`),
  ADD KEY `tb_pet_genero_pet_foreign` (`genero_pet`),
  ADD KEY `tb_pet_idade_pet_foreign` (`idade_pet`);

--
-- Índices de tabela `tb_pet_favoritado`
--
ALTER TABLE `tb_pet_favoritado`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `fk_usuario` (`fk_usuario`),
  ADD KEY `fk_pet` (`fk_pet`);

--
-- Índices de tabela `tb_pet_temperamento`
--
ALTER TABLE `tb_pet_temperamento`
  ADD PRIMARY KEY (`id_pet_temperamento`),
  ADD KEY `tb_pet_temperamento_fk_pet_foreign` (`fk_pet`),
  ADD KEY `tb_pet_temperamento_fk_temperamento_foreign` (`fk_temperamento`);

--
-- Índices de tabela `tb_temperamento`
--
ALTER TABLE `tb_temperamento`
  ADD PRIMARY KEY (`id_temperamento`);

--
-- Índices de tabela `tb_tipo`
--
ALTER TABLE `tb_tipo`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Índices de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_admin`
--
ALTER TABLE `tb_admin`
  MODIFY `id_admin` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tb_cuidado`
--
ALTER TABLE `tb_cuidado`
  MODIFY `id_cuidado` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_cuidado_pet`
--
ALTER TABLE `tb_cuidado_pet`
  MODIFY `id_pet_cuidado` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de tabela `tb_genero`
--
ALTER TABLE `tb_genero`
  MODIFY `id_genero` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_idade`
--
ALTER TABLE `tb_idade`
  MODIFY `id_idade` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tb_pet`
--
ALTER TABLE `tb_pet`
  MODIFY `id_pet` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de tabela `tb_pet_favoritado`
--
ALTER TABLE `tb_pet_favoritado`
  MODIFY `id_favorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de tabela `tb_pet_temperamento`
--
ALTER TABLE `tb_pet_temperamento`
  MODIFY `id_pet_temperamento` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT de tabela `tb_temperamento`
--
ALTER TABLE `tb_temperamento`
  MODIFY `id_temperamento` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_tipo`
--
ALTER TABLE `tb_tipo`
  MODIFY `id_tipo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id_usuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_cuidado_pet`
--
ALTER TABLE `tb_cuidado_pet`
  ADD CONSTRAINT `tb_cuidado_pet_fk_cuidado_foreign` FOREIGN KEY (`fk_cuidado`) REFERENCES `tb_cuidado` (`id_cuidado`),
  ADD CONSTRAINT `tb_cuidado_pet_fk_pet_foreign` FOREIGN KEY (`fk_pet`) REFERENCES `tb_pet` (`id_pet`);

--
-- Restrições para tabelas `tb_pet`
--
ALTER TABLE `tb_pet`
  ADD CONSTRAINT `tb_pet_genero_pet_foreign` FOREIGN KEY (`genero_pet`) REFERENCES `tb_genero` (`id_genero`),
  ADD CONSTRAINT `tb_pet_idade_pet_foreign` FOREIGN KEY (`idade_pet`) REFERENCES `tb_idade` (`id_idade`),
  ADD CONSTRAINT `tb_pet_tipo_pet_foreign` FOREIGN KEY (`tipo_pet`) REFERENCES `tb_tipo` (`id_tipo`);

--
-- Restrições para tabelas `tb_pet_favoritado`
--
ALTER TABLE `tb_pet_favoritado`
  ADD CONSTRAINT `tb_pet_favoritado_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `tb_usuario` (`id_usuario`),
  ADD CONSTRAINT `tb_pet_favoritado_ibfk_2` FOREIGN KEY (`fk_pet`) REFERENCES `tb_pet` (`id_pet`);

--
-- Restrições para tabelas `tb_pet_temperamento`
--
ALTER TABLE `tb_pet_temperamento`
  ADD CONSTRAINT `tb_pet_temperamento_fk_pet_foreign` FOREIGN KEY (`fk_pet`) REFERENCES `tb_pet` (`id_pet`),
  ADD CONSTRAINT `tb_pet_temperamento_fk_temperamento_foreign` FOREIGN KEY (`fk_temperamento`) REFERENCES `tb_temperamento` (`id_temperamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
